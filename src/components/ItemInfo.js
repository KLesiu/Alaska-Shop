import React from "react";
import './styles/ItemInfo.css'

const ItemInfo=(props)=>{
 console.log(props)
return(
   <div className="currentInfo">
      <h2>{props.info.name}</h2>
      <p>{props.info.description}</p>
   </div>
)
}
export default ItemInfo