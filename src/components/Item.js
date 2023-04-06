import React from "react";
import './styles/Item.css'
const Item=(props)=>{
    
    const items=[{src:props.info.img.first},{src:props.info.img.second},{src:props.info.img.third}]
    const atractions= [{name:props.info.atractions.first.name},{name:props.info.atractions.second.name},{name:props.info.atractions.third.name}]
   const generate= items.map((element)=>{
    return(
        <div className="item">
            <img src={element.src}></img>
        </div>
    )
        
    })
    const showAtractions=atractions.map((element)=>{
        return(
            <li>{element.name}</li>
        )
    })
return(
    <div className="items">
        <h2>{props.info.name}</h2>
        <div className="holderForInfo">
            <h3>Atractions:</h3>
            <ul className="listAtractions">
                {showAtractions}
            </ul>
        </div>
        <div className="holderForItems">{generate}
        </div>
        
    </div>
)
}
export default Item