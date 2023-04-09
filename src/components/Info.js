import React from "react";
import './styles/Info.css'
import { Link } from "react-router-dom";
const Info=()=>{
return(
    <div className="container">
       <div className="infoHolder">   <h1>Visit Alaska now</h1>
        <p>In our shop you can buy amazing travels to the most exciting places in Alaska.</p></div>
       <Link to={'/shopPage'}> <button className="seeOffer">See offer</button></Link>
        <div className="background"></div>
    </div>
)
}
export default Info