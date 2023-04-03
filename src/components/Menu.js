import React from "react";
import './styles/Menu.css'

const Menu=()=>{
return(
    <nav>
        <h2>Alaska Dream</h2>
        <button>Shop</button>
        <button><span style={{fontSize:60+'px',fontWeight:700}} className="material-symbols-outlined">
search
</span></button>
        <button><span style={{fontSize:60+'px',fontWeight:700}} className="material-symbols-outlined">
shopping_basket
</span></button>
    </nav>
)
}
export default Menu