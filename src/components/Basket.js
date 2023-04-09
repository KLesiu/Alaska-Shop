import React from "react";

import './styles/Basket.css'
const Basket=(props)=>{
    
    const list=props.basket.list.map((element)=>{
        
        return(
            <li className="elementList">{element}</li>
        )
    })
    const orderList=props.basket.numberOfOrder.map((element)=>{
        return(
            <li>x{element}</li>
        )
    })
       
return(
    <div className="basketDiv">
        <h2>Your basket</h2>
        <button className="closeBasket" onClick={props.hideBasket}>X</button>
        <div className="listInBasket">
        <ul className="basketList">
            {list}
        </ul>
        <ul className="ordersList">
            {orderList}
        </ul>
        </div>

        <p className="currentPrice">Your total is: <span>{props.basket.prices}$</span></p>
        <button className="buttonBuy">BUY</button>
    </div>
)
}
export default Basket