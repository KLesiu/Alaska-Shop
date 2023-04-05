import React from "react";
import './styles/Item.css'
const Item=(props)=>{
    
    const items=[{src:props.info.img.first},{src:props.info.img.second},{src:props.info.img.third}]
   const generate= items.map((element)=>{
    return(
        <div className="item">
            <img src={element.src}></img>
        </div>
    )
        
    })
return(
    <div className="items">
        <h2>{props.info.name}</h2>
        <div className="holderForInfo">
            <h3>Informacje</h3>
        </div>
        <div className="holderForItems">{generate}
        </div>
        
    </div>
)
}
export default Item