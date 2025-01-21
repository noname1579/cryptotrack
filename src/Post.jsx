import './styles/Post.css'
import photo from './img/Bitcoin.svg.png'

export default function Post({name, fullname, price}) {


  return(
    <>
      <div className="container">
        <div className="container_info">
          <div className="container_info_form">
            <img src={photo} />
            <div className="name">{name}</div>
            <div className="stick"> | </div>
            <div className="fullname">{fullname}</div>
          </div>
          <div className="price">{price} $</div>
          </div>
      </div>
    </>
  )
}