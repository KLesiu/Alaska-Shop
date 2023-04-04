import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Menu.css'

const Menu=()=>{
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
        <h2>Alaska Dream</h2>
        <Link style={{textDecoration: 'none',marginRight:5+'%'}} to={'/shopPage'}>
        <button>Shop</button>
        </Link>
        
        <button onClick={handleChange}><span style={{fontSize:60+'px',fontWeight:700}} className="material-symbols-outlined">
search
</span></button>
{showInput}
        <button><span style={{fontSize:60+'px',fontWeight:700}} className="material-symbols-outlined">
shopping_basket
</span></button>
    </nav>
)
}
export default Menu