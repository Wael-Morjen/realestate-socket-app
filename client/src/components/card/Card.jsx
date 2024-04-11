/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

import { BedDouble, Bath, Bookmark, MessageSquare, MapPin } from "lucide-react"

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <MapPin width={16} height={16}/>
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature"> 
              <BedDouble width={16} height={16}/>  
              <span>{item.bedroom} {item.bedroom > 1 ? 'bedrooms' : 'bedroom'}</span>           
            </div>
            <div className="feature">   
              <Bath width={16} height={16}/>
              <span>{item.bathroom} {item.bathroom > 1 ? 'bathrooms' : 'bathroom'}</span>           
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <Bookmark width={16} height={16}/>
            </div>
            <div className="icon">
              <MessageSquare width={16} height={16}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Card;

