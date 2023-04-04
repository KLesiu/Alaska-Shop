import React from "react";
import { useState,useEffect } from "react";
import './styles/Slider.css'

const Slider=()=>{
    const images=['aurora','bear','camper','reindeer','salmon','train','whale']
    const texts=['See beautiful aurora','Look at the one of the most dangerous animals - Grizzly','Travel by motorhome','Admire real reindeers','Do you like fishing? You can do it in many lakes in Alaska','Explore the landscape by train','See huge whales, on our ship trips']
    const [slider,setSlider]=useState(0)
    
    useEffect(()=>{

        const interval=setInterval(()=>{
            if(slider===6) setSlider(0)
            else setSlider(slider=>slider+1)
           

            
        },10000);
        return ()=>clearInterval(interval)
    },[slider]);
  
   
    return(
        <div className="holder">
             <div className="slider">
            
            <img src={`Images/${images[slider]}.jpg`
             }></img>
             
        </div>
            <div className="textHolder"><p>{texts[slider]}</p></div>
            <div className="animationDiv"></div>
        </div>
       
       
    )
}
export default Slider