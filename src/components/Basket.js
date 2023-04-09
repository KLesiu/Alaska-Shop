import React from "react";

import './styles/Basket.css'
const Basket=(props)=>{
    
    const list=props.basket.list.map((element)=>{
        
        return(
            <li>{element} x{props.basket.numberOfOrder[props.basket.list.indexOf(element)]}</li>
        )
    })
       
return(
    <div className="basketDiv">
        <h2>Your basket</h2>
        <button className="closeBasket" onClick={props.hideBasket}>X</button>
        <ul className="basketList">
            {list}
        </ul>
        <p className="currentPrice">Your total is: <span>{props.basket.prices}$</span></p>
        <button className="buttonBuy">BUY</button>
    </div>
)
}
export default Basket