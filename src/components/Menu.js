import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Menu.css'

const Menu=(props)=>{
    const [search,setSearch]=useState(false)
    const [showInput,setShowInput]=useState('')
    const handleChange=()=>{
        if(search===false){
            setSearch(true)
            setShowInput(()=>{
                return(
                    <input placeholder="Ship trip" type="text"></input>
                )
            })
        }
        else{
            setShowInput('')
            setSearch(false)
        }
    }
return(
    <nav>
        <Link className="home" style={{textDecoration: 'none'}} to={'/'}><h2>Alaska Dream</h2></Link>
        <Link style={{textDecoration: 'none',marginRight:5+'%'}} to={'/shopPage'}>
        <button>Shop</button>
        </Link>
        
        <button onClick={handleChange}><span style={{fontSize:60+'px',fontWeight:700}} className="material-symbols-outlined">
search
</span></button>
{showInput}
        <button onClick={props.basket}><span style={{fontSize:60+'px',fontWeight:700}} className="material-symbols-outlined">
shopping_basket
</span></button>
    </nav>
)
}
export default Menu