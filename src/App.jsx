import './styles/App.css'
import React, { useEffect, useState } from 'react';
import Post from './Post';

export default function App() {

  // const url = 'https://api.coinlore.net/api/tickers/'
  const url = 'https://api.coinranking.com/v2/coins'
  const [data, setData] = useState([])
  const [loadind, setLoadind] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const result = await response.json()
      setData(result.data.coins)
      setLoadind(false)
    }
    
    fetchData()
  }, [])

  if (loadind) {
    return (
      <>
        <h2 className='loading-h2'>Загрузка...</h2>
        <div className='loading'>
          <div className="spin"></div>
        </div>
      </>
    )
  }

  return (
    <>
    <div className="App">
    Crypto Track
    </div>
      <div className="app">

        {data.map(p => (
          <Post name={p.symbol} key={p.name} logo={p.iconUrl} fullname={p.name} percent_change_24h={p.change} price={p.price === 0 ? null : Number(p.price).toFixed(2)} />
        ))}
      </div>
    </>
  );
}