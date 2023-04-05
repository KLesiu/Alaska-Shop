import React from "react";
import './styles/Item.css'
const Item=(props)=>{
    
return(
    <div className="item">
        <h2>{props.info.name}</h2>
        
    </div>
)
}
export default Item