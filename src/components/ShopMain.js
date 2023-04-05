import React from "react";
import './styles/Nav.css'
import Item from "./Item";
import { useState } from "react";
const ShopMain=()=>{
    const [item,setItem]=useState({name:'Visit beautiful Juneau!',img:{
        first:'/Images/Juneau/1.jpg',
        second:'/Images/Juneau/2.jpg',
        third: '/Images/Juneau/3.jpg'
    }})
    return(
        <div className="containerShop">
        <nav className="nav">
            <h2>Our Offer</h2>
            <ul>
              <li onClick={()=>{
                setItem({name:'Visit beautiful Juneau!',img:{
                    first:'/Images/Juneau/1.jpg',
                    second:'/Images/Juneau/2.jpg',
                    third: '/Images/Juneau/3.jpg'
                }})
              }}>Trips to the Capital - Exciting Juneau</li> 

              <li onClick={()=>{
                setItem({name:'Have an amazing adventures in Anchorage!',img:{
                    first:'/Images/Anchorage/boat-3536807__340.jpg',
                    second:'/Images/Anchorage/sandspollen-3767414__340.jpg',
                    third: '/Images/Anchorage/venice-2933666__340.jpg'
                }})
              }}>Visit Anchorage and see the most popular places </li>

              <li onClick={()=>{
                setItem({name:'Do you like sailing? You can do that in Alaska!',img:{
                    first:'/Images/ShipTrips/cruise-g86757c4ac_640.jpg',
                    second:'/Images/ShipTrips/boat-gd014cea71_640.jpg',
                    third: '/Images/whale.jpg'
                    
                }})
              }} >Enjoy Ship Trips</li>

              <li onClick={()=>{
                setItem({name:'Enjoy Alaska alone,family or friends. Rent a motorhome or move by train',img:{
                    first:'/Images/camper.jpg',
                    second: '/Images/train.jpg',
                    third: '/Images/Motorhome/camper-ge2cb69f63_640.jpg'
                    
                }})
              }}>Rent a motorhome and admire Alaska landscape</li>

              <li onClick={()=>{
                setItem({name:'Enjoy the beauty of nature in National Denali Park',img:{
                    first:'/Images/Denali/denali-national-park-g32f0dae85_640.jpg',
                    second:'/Images/Denali/marmot-g2a413b880_640.jpg',
                    third: '/Images/Denali/moose-g4e34e03c5_640.jpg'
                }})
              }}>Trips to Denali Nation Park with a guide</li>

              <li onClick={()=>{
                setItem({name:'Fishing is pure pleasure with us, if you need equipment, you will find it with us!',img:{
                    first:'/Images/Fishing/boat-ga1168822d_640.jpg',
                    second:'/Images/Fishing/fishing-g10e0ed3b9_640.jpg',
                    third: '/Images/Fishing/rod-g7a2558edb_640.jpg'
                }})
              }}>Rent a fishing equipment</li>
            </ul>
        </nav>
        <Item info={item} />
        </div>
        
    )
}
export default ShopMain