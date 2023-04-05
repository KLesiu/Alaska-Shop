import React from "react";
import './styles/Nav.css'
import Item from "./Item";
import { useState } from "react";
const ShopMain=()=>{
    const [item,setItem]=useState({name:'Visit beautiful Juneau!',img:{
        one:'public/Images/Juneau/1.jpg',
        second:'public/Images/Juneau/2.jpg',
        third: 'public/Images/Juneau/3.jpg'
    }})
    return(
        <div className="containerShop">
        <nav className="nav">
            <h2>Our Offer</h2>
            <ul>
              <li onClick={()=>{
                setItem({name:'Visit beautiful Juneau!',img:{
                    one:'public/Images/Juneau/1.jpg',
                    second:'public/Images/Juneau/2.jpg',
                    third: 'public/Images/Juneau/3.jpg'
                }})
              }}>Trips to the Capital - Exciting Juneau</li> 

              <li onClick={()=>{
                setItem({name:'Have an amazing adventures in Anchorage!',img:{
                    one:'public/Images/Anchorage/boat-3536807__340.jpg',
                    second:'public/Images/Anchorage/sandspollen-3767414__340.jpg',
                    third: 'public/Images/Anchorage/venice-2933666__340.jpg'
                }})
              }}>Visit Anchorage and see the most popular places </li>

              <li onClick={()=>{
                setItem({name:'Do you like sailing? You can do that in Alaska!',img:{
                    one:'public/Images/ShipTrips/cruise-g86757c4ac_640.jpg',
                    second:'public/Images/ShipTrips/boat-gd014cea71_640.jpg',
                    third: ''
                }})
              }} >Enjoy Ship Trips</li>

              <li onClick={()=>{
                setItem({name:'Enjoy Alaska alone,family or friends. Rent a motorhome!',img:{
                    one:'public/Images/camper.jpg',
                    second:'',
                    third: ''
                }})
              }}>Rent a motorhome and admire Alaska landscape</li>

              <li onClick={()=>{
                setItem({name:'Enjoy the beauty of nature in National Denali Park',img:{
                    one:'public/Images/Denali/denali-national-park-g32f0dae85_640.jpg',
                    second:'public/Images/Denali/marmot-g2a413b880_640.jpg',
                    third: 'public/Images/Denali/moose-g4e34e03c5_640.jpg'
                }})
              }}>Trips to Denali Nation Park with a guide</li>

              <li onClick={()=>{
                setItem({name:'Fishing is pure pleasure with us, if you need equipment, you will find it with us!',img:{
                    one:'public/Images/Fishing/boat-ga1168822d_640.jpg',
                    two:'public/Images/Fishing/fishing-g10e0ed3b9_640.jpg'
                }})
              }}>Rent a fishing equipment</li>
            </ul>
        </nav>
        <Item info={item} />
        </div>
        
    )
}
export default ShopMain