import './styles/App.css'
import React, { useEffect, useState } from 'react';
import Post from './Post';

export default function App() {

  const url = 'https://api.coinlore.net/api/tickers/'
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
    }
    fetchData();
  }, []);
  console.log(data)

  return (
    <>
    <div className="App">
    Crypto Track
    </div>
      <div className="app">

        {data.map(p => (
          <Post name={p.symbol} fullname={p.name} percent_change_24h={p.percent_change_24h} price={p.price === 0 ? null : Number(p.price_usd).toFixed(2)} />
        ))}
      </div>
    </>
  );
}