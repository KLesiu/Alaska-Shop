import React from "react";

import './styles/Basket.css'
const Basket=(props)=>{
    
    const list=props.basket.list.map((element)=>{
        return(
            <li>{element}</li>
        )
    })
    
     
     

    
   
    
   
    
return(
    <div className="basketDiv">
        <h2>Your basket</h2>
        <button className="closeBasket" onClick={props.hideBasket}>X</button>
        <ul className="basketList">
            {list}
        </ul>
        <p>{props.basket.prices}</p>
    </div>
)
}
export default Basket