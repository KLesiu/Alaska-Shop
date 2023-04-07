import React from "react";
import './styles/ItemInfo.css'

const ItemInfo=(props)=>{
   
return(
   <div className="currentInfo">
      <h2 className="titleOfAttraction">{props.info.name}</h2>
      <p className="description">{props.info.description}</p>
      <img src={props.info.img}></img>
      <p className="price">Price: <span className="currPrice">{props.info.price}</span>$ </p>
      <input  className="numberOfOrder" type="number"></input>
      <button onClick={props.numberOfOrder} >Add to basket</button>
   </div>
)
}
export default ItemInfo