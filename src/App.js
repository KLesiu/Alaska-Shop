import React from 'react';
import { useState } from 'react';
import './App.css';
import './components/styles/Nav.css'
import './components/styles/ShopPage.css'
import Main from './components/Main';
import Info from './components/Info';
import Slider from './components/Slider';
import Menu from './components/Menu';
import Item from './components/Item';
import Basket from './components/Basket';
import { HashRouter, Link } from 'react-router-dom';import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemInfo from './components/ItemInfo';
function App() {
  const [item,setItem]=useState({name:'Visit beautiful Juneau!',img:{
    first:'./Images/Juneau/1.jpg',
    second:'./Images/Juneau/2.jpg',
    third: './Images/Juneau/3.jpg'
},atractions:{
  first: {
    name:'Juneau and Mendenhall glacier',
    description: `
    Discover the capital of Alaska. Nestled between stunning mountain vistas and winding waterways, the modern city of Juneau feels like the old west. From the colorful harbor to the busy capital building to the famous whale statue, this unique city has surprises around every corner.
    
    The highlight of the tour is Juneau's natural treasure, the Mendenhall Glacier. It is one of 38 glaciers flowing out of Juneau's vast 1,500-square-mile ice field.
    
    At this stop, you can explore this glacial wonder from a variety of perspectives, such as Nugget Creek Falls and the Photo Point Trail, which meanders along Lake Mendenhall and provides an unobstructed view of the glacier face. Visit the Mendenhall Glacier Visitor Center for an elevated view of the glacier and interactive geology exhibits explaining the formation of the glacier.`
  } ,
  second: {
    name: 'Segway Rainforest Photo Safari',
    description: `Meet your guide at the cruise ship docks in Juneau, then take the short six-mile transfer to the tour starting point. A short training session will help you familiarize yourself with the Segway and learn how it responds to your body language. After check-in, you will receive safety equipment and your own Segway. You'll be surprised how quickly you get the hang of it and how fun it is to ride.    Once you set off, you'll be immediately greeted with views of the majestic Mendenhall Glacier. Cruise along the coast and make several photo stops while admiring the pristine waters of the Lynn Canal, which is part of the Inside Passage. Since you are on a Segway, you will have the opportunity to interact closely with nature.
    
    Hear the calls of eagles in flight, the waves lapping against the shoreline, and maybe even spot a humpback whale from time to time. For an added adventure, hop off your Segway and walk the seven-minute path to a secluded beach to enjoy some local snacks. Immerse yourself in the Tongas National Forest, a temperate rainforest and the largest national forest in the US.
    
    Continue on to take amazing photos while taking in the panoramic views with fellow travelers. During the journey, your guide will tell you about the diverse native flora and fauna. Don't miss this extraordinary experience to discover one of the most unique places in Alaska.`
  }, 
  third: {
    name: 'Sentinel Lighthouse and Whale Watching Cruise',
    description: `Cruise to the Sentinel Island Lighthouse and search for humpback whales and killer whales on this cruise from Juneau. Snack on local Alaskan fudge products, granola (or similar) bars, and caribou sausage sticks. Relax with drinks such as coffee, tea and water.    Get picked up from the meeting point in a comfortable van and listen to fascinating commentary as you drive to Auke Bay (Don D. Statter Port). Get to know your captain and crew. Climb aboard a ship and set off to explore the rocky coast of Alaska.
   Relax in the heated cabin with a cup of hot coffee and enjoy the view of the fresh air, wildlife. 
   Sail through Alaska's Inside Passage and learn about whales and the Alaska Lighthouse Route. When humpback whales are spotted, the captain moves the ship into position to get a photo opportunity.
    Arrive at Sentinel Island and disembark the ship for a short walk along the show promenade due to a photo removal along the way. See the Lynn Channel (one of the longest and deepest fjords in the world) and the surrounding islands and waterways.
   Immerse yourself in history, mobil to the Sentinel Lighthouse and think about maritime history looking for its investment in 1902. Imagine the lonely life of a lighthouse keeper.
    Check out the shop for souvenir lighthouse pins, t-shirts, hats and sweatshirts that can be purchased, with proceeds going towards the lighthouse's ongoing restoration. Climb the lighthouse tower, view the lighthouse and look out over the Lynn Canal.
   Return to the boat for a scenic drive to Yankee Cove to meet your driver who will take you live to the Brotherhood Bridge Lookout, where you can view the Mendenhall Glacier (weather permitting). Return to the ship and return to the meeting point in Juneau.`
  } ,
  }})
  const [basket,setBasket]=useState({list:[],prices:0,numberOfOrder:[]})
  const [basketComponent,setBasketComponent]=useState('')
  
const [currentItem,setCurrentItem]=useState('')
const handleChange=(e)=>{
  const currentPhoto=showImage(e.target.textContent)
  const currentPrice=showPrice(e.target.textContent)
  if(item.atractions.first.name===e.target.textContent)
  {
   
    setCurrentItem({name:e.target.textContent,description:item.atractions.first.description,img:currentPhoto,price:currentPrice})
  } 
  else if(item.atractions.second.name===e.target.textContent) setCurrentItem({name:e.target.textContent,description:item.atractions.second.description,img:currentPhoto,price:currentPrice})
  else if (item.atractions.third.name===e.target.textContent) setCurrentItem({name:e.target.textContent,description:item.atractions.third.description,img:currentPhoto,price:currentPrice})
}
const showImage=(value)=>{
  if(value==='Juneau and Mendenhall glacier') return './Images/Juneau/1.jpg'
  else if(value==='Segway Rainforest Photo Safari') return './Images/Juneau/3.jpg'
  else if(value==='Sentinel Lighthouse and Whale Watching Cruise') return './Images/Juneau/2.jpg'
  else if(value===`Half-Day Resurrection Bay Wildlife Cruise`) return `./Images/Anchorage/boat-3536807__340.jpg`
  else if(value===`Traditional dog sled ride from Alaska`) return './Images/Anchorage/dog-g30058c7ad_640.jpg'
  else if(value==='Alaska Wildlife Conservation Center') return './Images/Anchorage/sandspollen-3767414__340.jpg'
  else if(value==='Kenai Fjords National Park 6-Hour Cruise') return './Images/ShipTrips/cruise-g86757c4ac_640.jpg'
  else if(value==='Valdez: 6-Hour Columbia Glacier Cruise') return './Images/ShipTrips/boat-gd014cea71_640.jpg'
  else if(value==='From Juneau: Whale Watching Cruise with Refreshments') return './Images/whale.jpg'
  else if(value==='Hymer motorhome') return './Images/Motorhome/camper-ge2cb69f63_640.jpg'
  else if(value==='Anchorage: 1-Hour Tram Tour') return './Images/Motorhome/cityrunner-g60126241f_640.jpg'
  else if(value==='Alaska Railroad') return './Images/train.jpg'
  else if(value==='Denali Park Zipline Adventure') return './Images/Denali/denali-national-park-g32f0dae85_640.jpg'
  else if(value==='Denali National Park: Wilderness ATV Adventure') return './Images/Denali/marmot-g2a413b880_640.jpg'
  else if(value==='Denali: Denali National Park Walking Tour') return './Images/Denali/moose-g4e34e03c5_640.jpg'
  else if(value==='Visit the capital of fishing - Yakutat') return './Images/Fishing/rod-g7a2558edb_640.jpg'
  else if(value==='Guided fishing on the Kenai Peninsula')
  return './Images/Fishing/fishing-g10e0ed3b9_640.jpg'
  else if(value==='Enjoy Nowitna') return './Images/Fishing/rod-g7a2558edb_640.jpg'
}
const showPrice=(value)=>{
  if(value==='Juneau and Mendenhall glacier') return 150
  else if(value==='Segway Rainforest Photo Safari') return 59
  else if(value==='Sentinel Lighthouse and Whale Watching Cruise') return 100
  else if(value===`Half-Day Resurrection Bay Wildlife Cruise`) return 170
  else if(value===`Traditional dog sled ride from Alaska`) return 20
  else if(value==='Alaska Wildlife Conservation Center') return 50
  else if(value==='Kenai Fjords National Park 6-Hour Cruise') return 150
  else if(value==='Valdez: 6-Hour Columbia Glacier Cruise') return 120
  else if(value==='From Juneau: Whale Watching Cruise with Refreshments') return 200
  else if(value==='Hymer motorhome') return 100
  else if(value==='Anchorage: 1-Hour Tram Tour') return 30
  else if(value==='Alaska Railroad') return 60
  else if(value==='Denali Park Zipline Adventure') return 80
  else if(value==='Denali National Park: Wilderness ATV Adventure') return 50
  else if(value==='Denali: Denali National Park Walking Tour') return 15
  else if(value==='Visit the capital of fishing - Yakutat') return 35
  else if(value==='Guided fishing on the Kenai Peninsula')
  return 45
  else if(value==='Enjoy Nowitna') return 20
}
const getNumberOfOrder=()=>{
  let numberOfOrder=document.querySelector('.numberOfOrder').value
  const currentPrice=document.querySelector('.currPrice').textContent
  const attraction=document.querySelector('.titleOfAttraction').textContent
  if(numberOfOrder==='') return
  if(numberOfOrder<1) numberOfOrder=1
  const price=numberOfOrder*parseInt(currentPrice)
    setBasket({list:[...basket.list,attraction],prices:basket.prices+price,numberOfOrder:[...basket.numberOfOrder,numberOfOrder]}) 
}
const showBasket=()=>{
setBasketComponent(()=>{
  return(
    <Basket hideBasket={hideBasket} basket={basket} />
  )
})
}
const hideBasket=()=>{
  setBasketComponent('')
  
}
  return (
    <div className="App">
    
  <HashRouter>
    <Routes>
      <Route path='/' element={<div>
        <Menu basket={showBasket}  />
        <Main />
        <Info />
        <Slider />
        {basketComponent}
      </div>}/>
      <Route path='/shopPage' element={
      <div>
        
        
        <Menu basket={showBasket} />
        
        <Main />
        <div className="shopPage">
         <div className="containerShop">
        <nav className="nav">
            <h2>Our Offer</h2>
            <ul>
              <li onClick={()=>{
                setItem({name:'Visit beautiful Juneau!',img:{
   first:'./Images/Juneau/1.jpg',
   second:'./Images/Juneau/2.jpg',
   third: './Images/Juneau/3.jpg'
                },atractions:{
 first: {
   name:'Juneau and Mendenhall glacier',
   description: `
   Discover the capital of Alaska. Nestled between stunning mountain vistas and winding waterways, the modern city of Juneau feels like the old west. From the colorful harbor to the busy capital building to the famous whale statue, this unique city has surprises around every corner.
   The highlight of the tour is Juneau's natural treasure, the Mendenhall Glacier. `,
   price: 150
 } ,
 second: {
   name: 'Segway Rainforest Photo Safari',
   description: `Meet your guide at the cruise ship docks in Juneau, then take the short six-mile transfer to the tour starting point. A short training session will help you familiarize yourself with the Segway and learn how it responds to your body language. After check-in, you will receive safety equipment and your own Segway. You'll be surprised how quickly you get the hang of it and how fun it is to ride.
            
   Once you set off, you'll be immediately greeted with views of the majestic Mendenhall Glacier. `,
   price: 59
 }, 
 third: {
   name: 'Sentinel Lighthouse and Whale Watching Cruise',
   description: `Cruise to the Sentinel Island Lighthouse and search for humpback whales and killer whales on this cruise from Juneau. Snack on local Alaskan fudge products, granola (or similar) bars, and caribou sausage sticks. Relax with drinks such as coffee, tea and water.   Get picked up from the meeting point in a comfortable van and listen to fascinating commentary as you drive to Auke Bay (Don D. Statter Port). Get to know your captain and crew. Climb aboard a ship and set off to explore the rocky coast of Alaska.
   Relax in the heated cabin with a cup of hot coffee and enjoy the view of the fresh air, wildlife. 
                
   `,
   price: 100
 } ,
          }})
              }}>Trips to the Capital - Exciting Juneau</li>               <li onClick={()=>{
                setItem({name:'Have an amazing adventures in Anchorage!',img:{
   first:'./Images/Anchorage/boat-3536807__340.jpg',
   second:'./Images/Anchorage/sandspollen-3767414__340.jpg',
   third: './Images/Anchorage/dog-g30058c7ad_640.jpg'
                },
              atractions:{
                first: {
 name: `Half-Day Resurrection Bay Wildlife Cruise`,
 description: `Embark on a guided cruise from Seward along Resurrection Bay from Seward with guided commentary. Encounter native wildlife such as whales, puffins, sea otters and more before seeing the natural beauty of Kenai Fjords National Park. Benefit from a transfer from the train station or cruise ship port. Then, go off the beaten track in search of wildlife, where they often spawn at Resurrection Bay. Watch with binoculars as sea otters carry their young on their bellies.`,
 price: 170
                },
                second: {
 name: `Traditional dog sled ride from Alaska`,
 description: `Feel the power of a championship dog sledding team and admire the breathtaking scenery in a secluded winter wonderland near Willow on a traditional Alaskan dog sled ride. You'll be greeted by your guide and friendly sled dogs as you're ready to hit the secluded trails. `,
 price: 20
                },
                third: {
 name: 'Alaska Wildlife Conservation Center',
 description: `
 Enjoy an entrance ticket that has given you access to over 200 acres of animal enclosures and stunning wildlife. Take a self-guided after-show, a 1.5-mile loop that can be reached on foot, by bike, or by vehicle, while learning about the wildlife with interpretive signs at each animal habitat.Support the Alaska Wildlife Conservation Center, which is a non-profit sanctuary dedicated to preserving Alaska's wildlife through conservation, cost, research, and high-quality animal conservation.
`,
 price: 50
                }
              }})
              }}>Visit Anchorage and see the most popular places </li>              <li onClick={()=>{
                setItem({name:'Do you like sailing? You can do that in Alaska!',img:{
   first:'./Images/ShipTrips/cruise-g86757c4ac_640.jpg',
   second:'./Images/ShipTrips/boat-gd014cea71_640.jpg',
   third: './Images/whale.jpg'
                },
              atractions: {
                first: {
 name:'Kenai Fjords National Park 6-Hour Cruise',
 description: `Climb aboard a stable, state-of-the-art catamaran and enjoy a day full of wildlife, glaciers, mountains, and more. See whales and glaciers in Resurrection Bay and learn about the region's history from your captain. The cruise begins with a wildlife search in the protected waters of Resurrection Bay. Whales, sea otters and puffins are often sighted within minutes of leaving port. The captain will provide information about the wildlife, glaciers, fjords and history of the area.`,
                price: 150
                },
                second: {
 name: 'Valdez: 6-Hour Columbia Glacier Cruise',
 description: `Take a 6-hour trip through Prince William Sound, with a visit to the Columbia Glacier area. Take the opportunity to see history in the making and retreat back to the Chugach Mountains. Embark on a sightseeing cruise and discover the first port of Valdez. Learn about early explorers, oil transportation, commercial fishing, and walk through cascading waterfalls in the coastal mountains. Drive through the Valdez Narrows and enjoy a hot soup lunch to prepare for the adventure ahead. `,
 price: 120
                },
                third: {
 name: 'From Juneau: Whale Watching Cruise with Refreshments',
 description: `Go hunting for whales with a naturalist guide on a day trip from Juneau. Hop aboard the boat and grab your binoculars to spot other wildlife such as sea lions, bald eagles, and black bears. Enjoy a light snack, water, coffee and hot chocolate on board. `,
 price: 200
                }
              
              }})
              }} >Enjoy Ship Trips</li>              <li onClick={()=>{
                setItem({name:'Enjoy Alaska alone,family or friends. Rent a motorhome or move by train',img:{
   first:'./Images/camper.jpg',
   second: './Images/train.jpg',
   third: './Images/Motorhome/camper-ge2cb69f63_640.jpg'
                },
              atractions:{
                first:{
 name: 'Hymer motorhome',
 description: `Rent a modern HYMER and enjoy Alaska with him`,
 price: 100
                },
                second: {
 name: 'Anchorage: 1-Hour Tram Tour',
 description: `Enjoy a fully narrated tour of historic Anchorage from the comfort of an enclosed, heated cart with panoramic windows. Travel on a 15-mile track through Alaska's largest city as a lively and informative Alaska guide shares city history, family stories, and more. The tour departs from the corner of 4th Street and F Street and includes many attractions such as Mysterious Earthquake Park and Westchester Lagoon, where waterfowl abound and elk and small mammals feed.`,
 price: 30
 
                },
                third:{
 name: 'Alaska Railroad',
 description: `
 Deciding to travel on the Alaska Railroad train, we are practically "doomed" to watch the amazing local nature at its best. Regardless of the route, the views are always stunning - mountain peaks, rushing rivers, valleys, forests, glaciers.`,
 price: 60
                }
              }})
              }}>Rent a motorhome and admire Alaska landscape</li>              <li onClick={()=>{
                setItem({name:'Enjoy the beauty of nature in National Denali Park',img:{
   first:'./Images/Denali/denali-national-park-g32f0dae85_640.jpg',
   second:'./Images/Denali/marmot-g2a413b880_640.jpg',
   third: './Images/Denali/moose-g4e34e03c5_640.jpg'
                },atractions:{
 first: {
   name:'Denali Park Zipline Adventure',
   description: `Your adventure begins with a three-mile railroad ride through scenic wild Alaska. Once you've geared up, your certified guide will lead you along six bridges in the sky and seven thrilling ziplines, including a double race finale.   The built-in hands-free braking system allows you to relax and enjoy the breathtaking mountain views. Take on the challenge as you climb to the top of the boreal forest on the uniquely designed tower of the ascending bridge.
   Glide through trees and tundra on over half a mile of zip lines. Finish this one-of-a-kind adventure by racing to the finish with your friends and family.`,
   price: 80
 },
 second:{
   name: 'Denali National Park: Wilderness ATV Adventure',
   description: `Embark on an action-packed adventure in Alaska. Whether you are a novice or an expert ATVer, this tour will prepare you for an unforgettable experience in the Alaskan wilderness on your own automatic single ATV or side-by-side multiplayer ATV.   Driving along trails flanked by Denali National Park at speeds up to 30mph, your adventure includes breathtaking 360-degree scenic stops overlooking the Alaska Range, Lake Otto, and the Healy Valley.`,
   price: 50
 },
 third: {
   name: 'Denali: Denali National Park Walking Tour',
   description: `Enjoy a 3-hour guided walk. Immerse yourself in the wildness and grandeur of Alaska's amazing landscape.   Meet your guide at your hotel. Hop in the van for a short drive and meet your small group of up to 7 travelers. Get ready for a guided walk along one of the many beautiful trails on the north side of the Alaska Range.
   Learn about the animals, people, and plants of Denali from your expert local guide. Admire the unique natural landscape as you traverse the trail. `,
   price: 15
 }
                }})
              }}>Trips to Denali Nation Park with a guide</li>              <li onClick={()=>{
                setItem({name:'Fishing is pure pleasure with us, if you need equipment, you will find it with us!',img:{
   first:'./Images/Fishing/boat-ga1168822d_640.jpg',
   second:'./Images/Fishing/fishing-g10e0ed3b9_640.jpg',
   third: './Images/Fishing/rod-g7a2558edb_640.jpg'
                },
              atractions:{
                first: {
 name: 'Visit the capital of fishing - Yakutat',
 description: `Rent fishing gear here and fish in one of the world's most angler-friendly locations`,
 price: 35
                },
                second: {
 name: 'Guided fishing on the Kenai Peninsula',
 description: `
 Expeditions to Alaska to the Kenai Peninsula. Trips for large salmon (5 species of salmon, including the largest King Salmon and others Kidney Salmon, Silver Salmon, Pink Salmon, Sockeye Salmon), for trout (Brown Trout, Rainbow Trout, Steelhead, Dolly Varden, Arctic Char) as well as smoke and grayling`,
 price: 45
                },
                third: {
 name: 'Enjoy Nowitna',
 description: `Rent fishing gear here and fish in one of the world's most angler-friendly locations`,
 price: 20
                }
              }})
              }}>Rent a fishing equipment</li>
            </ul>
        </nav>
        <Item info={item} onChange={handleChange} />
        {basketComponent}
        </div>
      </div>
      </div>
     }/>
     <Route path='/shopPage/:id' element={
      <div>
       
         <Menu basket={showBasket} />
        <Main />
        <div className="shopPage">
         <div className="containerShop">
        <nav className="nav">
            <h2>Our Offer</h2>
            <ul>
             <Link to={'/shopPage'}><li onClick={()=>{
                setItem({name:'Visit beautiful Juneau!',img:{
   first:'./Images/Juneau/1.jpg',
   second:'./Images/Juneau/2.jpg',
   third: './Images/Juneau/3.jpg'
                },atractions:{
 first: {
   name:'Juneau and Mendenhall glacier',
   description: `
   Discover the capital of Alaska. Nestled between stunning mountain vistas and winding waterways, the modern city of Juneau feels like the old west. From the colorful harbor to the busy capital building to the famous whale statue, this unique city has surprises around every corner.
   The highlight of the tour is Juneau's natural treasure, the Mendenhall Glacier. `,
   price: 150
 } ,
 second: {
   name: 'Segway Rainforest Photo Safari',
   description: `Meet your guide at the cruise ship docks in Juneau, then take the short six-mile transfer to the tour starting point. A short training session will help you familiarize yourself with the Segway and learn how it responds to your body language. After check-in, you will receive safety equipment and your own Segway. You'll be surprised how quickly you get the hang of it and how fun it is to ride.
  Once you set off, you'll be immediately greeted with views of the majestic Mendenhall Glacier. `
   ,price: 59
 }, 
 third: {
   name: 'Sentinel Lighthouse and Whale Watching Cruise',
   description: `Cruise to the Sentinel Island Lighthouse and search for humpback whales and killer whales on this cruise from Juneau. Snack on local Alaskan fudge products, granola (or similar) bars, and caribou sausage sticks. Relax with drinks such as coffee, tea and water.   Get picked up from the meeting point in a comfortable van and listen to fascinating commentary as you drive to Auke Bay (Don D. Statter Port). Get to know your captain and crew. Climb aboard a ship and set off to explore the rocky coast of Alaska.
   Relax in the heated cabin with a cup of hot coffee and enjoy the view of the fresh air, wildlife. 
  `,
  price: 100
 } ,
          }})
              }}>Trips to the Capital - Exciting Juneau</li> </Link>             <Link to={'/shopPage'}> <li onClick={()=>{
                setItem({name:'Have an amazing adventures in Anchorage!',img:{
   first:'./Images/Anchorage/boat-3536807__340.jpg',
   second:'./Images/Anchorage/sandspollen-3767414__340.jpg',
   third: './Images/Anchorage/venice-2933666__340.jpg'
                },
              atractions:{
                first: {
 name: `Half-Day Resurrection Bay Wildlife Cruise`,
 description: `Embark on a guided cruise from Seward along Resurrection Bay from Seward with guided commentary. Encounter native wildlife such as whales, puffins, sea otters and more before seeing the natural beauty of Kenai Fjords National Park. Benefit from a transfer from the train station or cruise ship port. Then, go off the beaten track in search of wildlife, where they often spawn at Resurrection Bay. Watch with binoculars as sea otters carry their young on their bellies.`,
 price: 170
                },
                second: {
 name: `Traditional dog sled ride from Alaska`,
 description: `Feel the power of a championship dog sledding team and admire the breathtaking scenery in a secluded winter wonderland near Willow on a traditional Alaskan dog sled ride. You'll be greeted by your guide and friendly sled dogs as you're ready to hit the secluded trails. `,
 price: 20
                },
                third: {
 name: 'Alaska Wildlife Conservation Center',
 description: `
 Enjoy an entrance ticket that has given you access to over 200 acres of animal enclosures and stunning wildlife. Take a self-guided after-show, a 1.5-mile loop that can be reached on foot, by bike, or by vehicle, while learning about the wildlife with interpretive signs at each animal habitat.
 
 Support the Alaska Wildlife Conservation Center, which is a non-profit sanctuary dedicated to preserving Alaska's wildlife through conservation, cost, research, and high-quality animal conservation.

                `,
                price: 50
                }
              }})
              }}>Visit Anchorage and see the most popular places </li> </Link>             <Link to={'/shopPage'}> <li onClick={()=>{
                setItem({name:'Do you like sailing? You can do that in Alaska!',img:{
   first:'./Images/ShipTrips/cruise-g86757c4ac_640.jpg',
   second:'./Images/ShipTrips/boat-gd014cea71_640.jpg',
   third: './Images/whale.jpg'
                },
              atractions: {
                first: {
 name:'Kenai Fjords National Park 6-Hour Cruise',
 description: `Climb aboard a stable, state-of-the-art catamaran and enjoy a day full of wildlife, glaciers, mountains, and more. See whales and glaciers in Resurrection Bay and learn about the region's history from your captain.
  
  
  
 The cruise begins with a wildlife search in the protected waters of Resurrection Bay. Whales, sea otters and puffins are often sighted within minutes of leaving port. The captain will provide information about the wildlife, glaciers, fjords and history of the area.`,
                price: 150
                },
                second: {
 name: 'Valdez: 6-Hour Columbia Glacier Cruise',
 description: `Take a 6-hour trip through Prince William Sound, with a visit to the Columbia Glacier area. Take the opportunity to see history in the making and retreat back to the Chugach Mountains. Embark on a sightseeing cruise and discover the first port of Valdez. Learn about early explorers, oil transportation, commercial fishing, and walk through cascading waterfalls in the coastal mountains. Drive through the Valdez Narrows and enjoy a hot soup lunch to prepare for the adventure ahead. `,
 price: 120
                },
                third: {
 name: 'From Juneau: Whale Watching Cruise with Refreshments',
 description: `Go hunting for whales with a naturalist guide on a day trip from Juneau. Hop aboard the boat and grab your binoculars to spot other wildlife such as sea lions, bald eagles, and black bears. Enjoy a light snack, water, coffee and hot chocolate on board. `,
 price: 200
                }
              
              }})
              }} >Enjoy Ship Trips</li> </Link>             <Link to={'/shopPage'}> <li onClick={()=>{
                setItem({name:'Enjoy Alaska alone,family or friends. Rent a motorhome or move by train',img:{
   first:'./Images/camper.jpg',
   second: './Images/train.jpg',
   third: './Images/Motorhome/camper-ge2cb69f63_640.jpg'
                },
              atractions:{
                first:{
 name: 'Hymer motorhome',
 description: `Rent a modern HYMER and enjoy Alaska with him`,
 price: 100
                },
                second: {
 name: 'Anchorage: 1-Hour Tram Tour',
 description: `Enjoy a fully narrated tour of historic Anchorage from the comfort of an enclosed, heated cart with panoramic windows. Travel on a 15-mile track through Alaska's largest city as a lively and informative Alaska guide shares city history, family stories, and more. The tour departs from the corner of 4th Street and F Street and includes many attractions such as Mysterious Earthquake Park and Westchester Lagoon, where waterfowl abound and elk and small mammals feed.`,
 price: 30
 
                },
                third:{
 name: 'Alaska Railroad',
 description: `
 Deciding to travel on the Alaska Railroad train, we are practically "doomed" to watch the amazing local nature at its best. Regardless of the route, the views are always stunning - mountain peaks, rushing rivers, valleys, forests, glaciers.`,
 price: 60
                }
              }})
              }}>Rent a motorhome and admire Alaska landscape</li> </Link>            <Link to={'/shopPage'}> <li onClick={()=>{
                setItem({name:'Enjoy the beauty of nature in National Denali Park',img:{
   first:'./Images/Denali/denali-national-park-g32f0dae85_640.jpg',
   second:'./Images/Denali/marmot-g2a413b880_640.jpg',
   third: './Images/Denali/moose-g4e34e03c5_640.jpg'
                },atractions:{
 first: {
   name:'Denali Park Zipline Adventure',
   description: `Your adventure begins with a three-mile railroad ride through scenic wild Alaska. Once you've geared up, your certified guide will lead you along six bridges in the sky and seven thrilling ziplines, including a double race finale.   The built-in hands-free braking system allows you to relax and enjoy the breathtaking mountain views. Take on the challenge as you climb to the top of the boreal forest on the uniquely designed tower of the ascending bridge.
   Glide through trees and tundra on over half a mile of zip lines. Finish this one-of-a-kind adventure by racing to the finish with your friends and family.`,
   price: 80
 },
 second:{
   name: 'Denali National Park: Wilderness ATV Adventure',
   description: `Embark on an action-packed adventure in Alaska. Whether you are a novice or an expert ATVer, this tour will prepare you for an unforgettable experience in the Alaskan wilderness on your own automatic single ATV or side-by-side multiplayer ATV.   Driving along trails flanked by Denali National Park at speeds up to 30mph, your adventure includes breathtaking 360-degree scenic stops overlooking the Alaska Range, Lake Otto, and the Healy Valley.`,
   price: 50
 },
 third: {
   name: 'Denali: Denali National Park Walking Tour',
   description: `Enjoy a 3-hour guided walk. Immerse yourself in the wildness and grandeur of Alaska's amazing landscape.   Meet your guide at your hotel. Hop in the van for a short drive and meet your small group of up to 7 travelers. Get ready for a guided walk along one of the many beautiful trails on the north side of the Alaska Range.
   Learn about the animals, people, and plants of Denali from your expert local guide. Admire the unique natural landscape as you traverse the trail. `,
   price: 15
 }
                }})
              }}>Trips to Denali Nation Park with a guide</li> </Link>            <Link to={'/shopPage'}><li onClick={()=>{
                setItem({name:'Fishing is pure pleasure with us, if you need equipment, you will find it with us!',img:{
   first:'./Images/Fishing/boat-ga1168822d_640.jpg',
   second:'./Images/Fishing/fishing-g10e0ed3b9_640.jpg',
   third: './Images/Fishing/rod-g7a2558edb_640.jpg'
                },
              atractions:{
                first: {
 name: 'Visit the capital of fishing - Yakutat',
 description: `Rent fishing gear here and fish in one of the world's most angler-friendly locations`,
 price: 35
                },
                second: {
 name: 'Guided fishing on the Kenai Peninsula',
 description: `
 Expeditions to Alaska to the Kenai Peninsula. Trips for large salmon (5 species of salmon, including the largest King Salmon and others Kidney Salmon, Silver Salmon, Pink Salmon, Sockeye Salmon), for trout (Brown Trout, Rainbow Trout, Steelhead, Dolly Varden, Arctic Char) as well as smoke and grayling`,
 price: 45
                },
                third: {
 name: 'Enjoy Nowitna',
 description: `Rent fishing gear here and fish in one of the world's most angler-friendly locations`,
 price: 20
                }
              }})
              }}>Rent a fishing equipment</li></Link>
            </ul>
        </nav>
        <ItemInfo info={currentItem} numberOfOrder={getNumberOfOrder} />
        {basketComponent}
        </div>
      </div>
       
      </div>
     }>     </Route>
    
  
   
        </Routes>
  
        </HashRouter>
   
        
     
     
    </div>
  );
}export default App;
