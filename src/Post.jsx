import './styles/Post.css'
import photo from './img/Bitcoin.svg.png'
import arrUp from './img/arrUp.png'
import arrDown from './img/arrDown.png'

export default function Post({name, fullname, percent_change_24h, price}) {


  return(
    <>
      <div className="container">
        <div className="container_info">
          <div className="container_info_form">
            <img src={photo} />
            <div className="name">{name}</div>
            <div className="stick"> | </div>
            <div className="fullname">{fullname}</div>
            <div className="percent_change_24h">{percent_change_24h}{percent_change_24h > 0 ? <img src={arrUp} /> : <img src={arrDown} />} </div>
          </div>
          <div className="price">{price} $</div>
          </div>
      </div>
    </>
  )
}