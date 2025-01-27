import './styles/Post.css'
import arrUp from './img/arrUp.png'
import arrDown from './img/arrDown.png'

export default function Post({name, fullname, percent_change_24h, price, logo}) {


  return(
    <>
      <div className="container">
        <div className="container_info">
          <div className="container_info_form">
            <img src={logo} />
            <div className="container_info_form_width">
              <div className="name">{name}</div>
              <div className="stick"> | </div>
              <div className="fullname">{fullname}</div>
            </div>
            <div className="percent_change_24h">{Math.abs(percent_change_24h)}%{percent_change_24h > 0 ? <img src={arrUp} /> : <img src={arrDown} />} </div>
          </div>
          <div className="price">{price} $</div>
          </div>
      </div>
    </>
  )
}