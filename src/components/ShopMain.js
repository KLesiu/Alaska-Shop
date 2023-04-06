import React from "react";
import './styles/Nav.css'
import Item from "./Item";
import { useState } from "react";
const ShopMain=()=>{
    const [item,setItem]=useState({name:'Visit beautiful Juneau!',img:{
        first:'/Images/Juneau/1.jpg',
        second:'/Images/Juneau/2.jpg',
        third: '/Images/Juneau/3.jpg'
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
        description: `Meet your guide at the cruise ship docks in Juneau, then take the short six-mile transfer to the tour starting point. A short training session will help you familiarize yourself with the Segway and learn how it responds to your body language. After check-in, you will receive safety equipment and your own Segway. You'll be surprised how quickly you get the hang of it and how fun it is to ride.

        Once you set off, you'll be immediately greeted with views of the majestic Mendenhall Glacier. Cruise along the coast and make several photo stops while admiring the pristine waters of the Lynn Canal, which is part of the Inside Passage. Since you are on a Segway, you will have the opportunity to interact closely with nature.
        
        Hear the calls of eagles in flight, the waves lapping against the shoreline, and maybe even spot a humpback whale from time to time. For an added adventure, hop off your Segway and walk the seven-minute path to a secluded beach to enjoy some local snacks. Immerse yourself in the Tongas National Forest, a temperate rainforest and the largest national forest in the US.
        
        Continue on to take amazing photos while taking in the panoramic views with fellow travelers. During the journey, your guide will tell you about the diverse native flora and fauna. Don't miss this extraordinary experience to discover one of the most unique places in Alaska.`
      }, 
      third: {
        name: 'Sentinel Lighthouse and Whale Watching Cruise',
        description: `Cruise to the Sentinel Island Lighthouse and search for humpback whales and killer whales on this cruise from Juneau. Snack on local Alaskan fudge products, granola (or similar) bars, and caribou sausage sticks. Relax with drinks such as coffee, tea and water.



        Get picked up from the meeting point in a comfortable van and listen to fascinating commentary as you drive to Auke Bay (Don D. Statter Port). Get to know your captain and crew. Climb aboard a ship and set off to explore the rocky coast of Alaska.
        
        
        
        Relax in the heated cabin with a cup of hot coffee and enjoy the view of the fresh air, wildlife. Keep your eyes peeled for a variety of local marine life such as humpback whales, killer whales, Dall porpoises, harbor porpoises, harbor seals, and Steller sea lions.
        
        
        
        Sail through Alaska's Inside Passage and learn about whales and the Alaska Lighthouse Route. When humpback whales are spotted, the captain moves the ship into position to get a photo opportunity.
        
        
        Arrive at Sentinel Island and disembark the ship for a short walk along the show promenade due to a photo removal along the way. See the Lynn Channel (one of the longest and deepest fjords in the world) and the surrounding islands and waterways.
        
        
        
        Immerse yourself in history, mobil to the Sentinel Lighthouse and think about maritime history looking for its investment in 1902. Imagine the lonely life of a lighthouse keeper.
        
        
        
        Check out the shop for souvenir lighthouse pins, t-shirts, hats and sweatshirts that can be purchased, with proceeds going towards the lighthouse's ongoing restoration. Climb the lighthouse tower, view the lighthouse and look out over the Lynn Canal.
        
        
        
        Return to the boat for a scenic drive to Yankee Cove to meet your driver who will take you live to the Brotherhood Bridge Lookout, where you can view the Mendenhall Glacier (weather permitting). Return to the ship and return to the meeting point in Juneau.`
      } ,
      

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
                    description: `Meet your guide at the cruise ship docks in Juneau, then take the short six-mile transfer to the tour starting point. A short training session will help you familiarize yourself with the Segway and learn how it responds to your body language. After check-in, you will receive safety equipment and your own Segway. You'll be surprised how quickly you get the hang of it and how fun it is to ride.
            
                    Once you set off, you'll be immediately greeted with views of the majestic Mendenhall Glacier. Cruise along the coast and make several photo stops while admiring the pristine waters of the Lynn Canal, which is part of the Inside Passage. Since you are on a Segway, you will have the opportunity to interact closely with nature.
                    
                    Hear the calls of eagles in flight, the waves lapping against the shoreline, and maybe even spot a humpback whale from time to time. For an added adventure, hop off your Segway and walk the seven-minute path to a secluded beach to enjoy some local snacks. Immerse yourself in the Tongas National Forest, a temperate rainforest and the largest national forest in the US.
                    
                    Continue on to take amazing photos while taking in the panoramic views with fellow travelers. During the journey, your guide will tell you about the diverse native flora and fauna. Don't miss this extraordinary experience to discover one of the most unique places in Alaska.`
                  }, 
                  third: {
                    name: 'Sentinel Lighthouse and Whale Watching Cruise',
                    description: `Cruise to the Sentinel Island Lighthouse and search for humpback whales and killer whales on this cruise from Juneau. Snack on local Alaskan fudge products, granola (or similar) bars, and caribou sausage sticks. Relax with drinks such as coffee, tea and water.
            
            
            
                    Get picked up from the meeting point in a comfortable van and listen to fascinating commentary as you drive to Auke Bay (Don D. Statter Port). Get to know your captain and crew. Climb aboard a ship and set off to explore the rocky coast of Alaska.
                    
                    
                    
                    Relax in the heated cabin with a cup of hot coffee and enjoy the view of the fresh air, wildlife. Keep your eyes peeled for a variety of local marine life such as humpback whales, killer whales, Dall porpoises, harbor porpoises, harbor seals, and Steller sea lions.
                    
                    
                    
                    Sail through Alaska's Inside Passage and learn about whales and the Alaska Lighthouse Route. When humpback whales are spotted, the captain moves the ship into position to get a photo opportunity.
                    
                    
                    Arrive at Sentinel Island and disembark the ship for a short walk along the show promenade due to a photo removal along the way. See the Lynn Channel (one of the longest and deepest fjords in the world) and the surrounding islands and waterways.
                    
                    
                    
                    Immerse yourself in history, mobil to the Sentinel Lighthouse and think about maritime history looking for its investment in 1902. Imagine the lonely life of a lighthouse keeper.
                    
                    
                    
                    Check out the shop for souvenir lighthouse pins, t-shirts, hats and sweatshirts that can be purchased, with proceeds going towards the lighthouse's ongoing restoration. Climb the lighthouse tower, view the lighthouse and look out over the Lynn Canal.
                    
                    
                    
                    Return to the boat for a scenic drive to Yankee Cove to meet your driver who will take you live to the Brotherhood Bridge Lookout, where you can view the Mendenhall Glacier (weather permitting). Return to the ship and return to the meeting point in Juneau.`
                  } ,
                  
            
                }})
              }}>Trips to the Capital - Exciting Juneau</li> 

              <li onClick={()=>{
                setItem({name:'Have an amazing adventures in Anchorage!',img:{
                    first:'/Images/Anchorage/boat-3536807__340.jpg',
                    second:'/Images/Anchorage/sandspollen-3767414__340.jpg',
                    third: '/Images/Anchorage/venice-2933666__340.jpg'
                },
              atractions:{
                first: {
                  name: `Half-Day Resurrection Bay Wildlife Cruise`,
                  description: `Embark on a guided cruise from Seward along Resurrection Bay from Seward with guided commentary. Encounter native wildlife such as whales, puffins, sea otters and more before seeing the natural beauty of Kenai Fjords National Park.



                  Benefit from a transfer from the train station or cruise ship port. Then, go off the beaten track in search of wildlife, where they often spawn at Resurrection Bay. Watch with binoculars as sea otters carry their young on their bellies.
                  
                  
                  
                  Marvel at the speed of the Dall Porpoise as it surfs the ship's wake. Marvel at the size and majesty of killer whales, humpback whales and other amazing whale species, and learn about their habitat from your on-board guide. Admire the wildlife of Kenai Fjords National Park.`
                },
                second: {
                  name: `Traditional dog sled ride from Alaska`,
                  description: `Feel the power of a championship dog sledding team and admire the breathtaking scenery in a secluded winter wonderland near Willow on a traditional Alaskan dog sled ride. You'll be greeted by your guide and friendly sled dogs as you're ready to hit the secluded trails. Top up with cookies and hot chocolate.



                  Just an hour's drive north of Anchorage and only 45 minutes north of Palmer, the Willow neighborhood offers a magical place to learn about mushing before continuing your adventure on private trails.
                  
                  
                  
                  Meet the dogs and watch their energy levels skyrocket as your guide prepares the team for the run. All the dogs in your team have either run the famous 1,000-mile Iditarod race or are actively training to run it one day.
                  
                  
                  
                  Go through a guided safety briefing before taking your seat in the sleigh. Notice how the noise level drops when you drive off private practice tracks. Feel the focus and determination of dogs as they drive around curves, climbs and hills.
                  
                  
                  
                  Immerse yourself in the natural sounds that surround you as you immerse yourself in peaceful solitude. Enjoy the breathtaking views of Denali amidst Alaska's beautiful snow-covered countryside. Keep your eyes peeled as you may spot a moose or a fox.
                  
                  
                  
                  After the ride, let the dogs run out for a while to play. Connect with the huskies and watch them happily jump around you. Finally, warm up in the visitor center with cookies, cocoa, and a dog hug.`
                },
                third: {
                  name: 'Alaska Wildlife Conservation Center',
                  description: `
                  Ciesz się biletem wstępu, który zapewni Ci dostęp do ponad 200 akrów wybiegów dla zwierząt i wspaniałej przyrody. Wybierz się na samodzielną wycieczkę po malowniczej, 1,5-kilometrowej pętli, do której można dotrzeć pieszo, rowerem lub samochodem, jednocześnie poznając dziką przyrodę za pomocą znaków interpretacyjnych w każdym siedlisku zwierząt.
                  
                  Wspieraj Alaska Wildlife Conservation Center, które jest sanktuarium non-profit, którego celem jest ochrona dzikiej przyrody Alaski poprzez ochronę, edukację, badania i wysokiej jakości opiekę nad zwierzętami.
                  
                  
                  
                  Centrum Ochrony Przyrody Alaski (AWCC) znajduje się w Portage Valley i jest otoczone zapierającym dech w piersiach pasmem górskim Chugach i Turnagain Arm Inlet.
                  
                  Przejdź przez 1,5-milową pętlę AWCC, która jest idealną przygodą na zimowe miesiące. Doświadcz unikalnych sposobów na zwiedzanie Centrum, podziwiając przyrodę w zimie, w tym szybowanie na nartach biegowych, jazdę na grubym rowerze lub korzystanie z bezpłatnych wypożyczalni sanek z AWCC.
                  
                  
                  
                  Zrelaksuj się na pokładzie własnego pojazdu z malowniczą pętlą o długości 1,5 mili wokół sanktuarium. Zobacz osierocone i ranne zwierzęta przyjęte przez AWCC, które teraz otrzymały dom na zawsze.`
                }
              }})
              }}>Visit Anchorage and see the most popular places </li>

              <li onClick={()=>{
                setItem({name:'Do you like sailing? You can do that in Alaska!',img:{
                    first:'/Images/ShipTrips/cruise-g86757c4ac_640.jpg',
                    second:'/Images/ShipTrips/boat-gd014cea71_640.jpg',
                    third: '/Images/whale.jpg'
                    
                },
              atractions: {
                first: {
                  name:'Kenai Fjords National Park 6-Hour Cruise',
                  description: `Climb aboard a stable, state-of-the-art catamaran and enjoy a day full of wildlife, glaciers, mountains, and more. See whales and glaciers in Resurrection Bay and learn about the region's history from your captain.
  
  
  
                  The cruise begins with a wildlife search in the protected waters of Resurrection Bay. Whales, sea otters and puffins are often sighted within minutes of leaving port. The captain will provide information about the wildlife, glaciers, fjords and history of the area.
                
                Stop at one of the tidal glaciers where calving is common, where giant chunks of glacier ice break off and fall into the water. A fully stocked bar is available for those wishing to sample local beers and glacier cocktails. Enjoy a deli lunch on board during the cruise.`
                },
                second: {
                  name: 'Valdez: 6-Hour Columbia Glacier Cruise',
                  description: `Take a 6-hour trip through Prince William Sound, with a visit to the Columbia Glacier area. Take the opportunity to see history in the making and retreat back to the Chugach Mountains.



                  Embark on a sightseeing cruise and discover the first port of Valdez. Learn about early explorers, oil transportation, commercial fishing, and walk through cascading waterfalls in the coastal mountains.
                  
                  
                  
                  Drive through the Valdez Narrows and enjoy a hot soup lunch to prepare for the adventure ahead. Walk across Prince William Sound and try to spot seals, sea otters, sea lions, porpoises, killer whales, humpback whales, blowfish, bald eagles, and more.
                  
                  
                  
                  Step into Columbia Bay and put on your warm layers and winter gear. Discover a world surrounded by ice, largely untouched by humans. Return in time to explore the community of Valdez and enjoy dinner at a local restaurant.`
                },
                third: {
                  name: 'From Juneau: Whale Watching Cruise with Refreshments',
                  description: `Go hunting for whales with a naturalist guide on a day trip from Juneau. Hop aboard the boat and grab your binoculars to spot other wildlife such as sea lions, bald eagles, and black bears. Enjoy a light snack, water, coffee and hot chocolate on board.



                  Depart downtown Juneau by bus driven by a local guide along a scenic route to Auke Bay, where you will board a comfortable jet boat. Be guided by a captain and a naturalist on an unforgettable whale hunt on the Favorite Channel, Stephens Passage, Lynn Canal or Saginaw Channel.
                  
                  
                  
                  Binoculars are provided so you can see humpback whales, killer whales, porpoises, harbor seals, Steller sea lions, bald eagles, black bears and high mountains better. With the increasing numbers of whales in the area and the comfort of small boats, you're sure to see plenty of them.
                  
                  
                  
                  This tour includes transfers between downtown and Auke Bay and two hours on the water. The price of the tour includes onboard drinks including bottled water, coffee, hot chocolate and a small snack of locally caught Alaskan salmon on a fresh bagel.`
                }
              
              }})
              }} >Enjoy Ship Trips</li>

              <li onClick={()=>{
                setItem({name:'Enjoy Alaska alone,family or friends. Rent a motorhome or move by train',img:{
                    first:'/Images/camper.jpg',
                    second: '/Images/train.jpg',
                    third: '/Images/Motorhome/camper-ge2cb69f63_640.jpg'
                    
                },
              atractions:{
                first:{
                  name: 'Hymer motorhome',
                  description: `Rent a modern HYMER and enjoy Alaska with him`
                },
                second: {
                  name: 'Anchorage: 1-Hour Tram Tour',
                  description: `Enjoy a fully narrated tour of historic Anchorage from the comfort of an enclosed, heated cart with panoramic windows.

                  Travel on a 15-mile track through Alaska's largest city as a lively and informative Alaska guide shares city history, family stories, and more. The tour departs from the corner of 4th Street and F Street and includes many attractions such as Mysterious Earthquake Park and Westchester Lagoon, where waterfowl abound and elk and small mammals feed.
                  
                  See the Alaska Railroad and floating planes departing from Lake Hood and Lake Spenard. Enjoy breathtaking views of mountain ranges, wildlife, and historic districts
                  
                  Plus, get a coupon book serving over 20 restaurants, gift shops, tours, and attractions in downtown Anchorage.`
                  
                },
                third:{
                  name: 'Alaska Railroad',
                  description: `
                  Deciding to travel on the Alaska Railroad train, we are practically "doomed" to watch the amazing local nature at its best. Regardless of the route, the views are always stunning - mountain peaks, rushing rivers, valleys, forests, glaciers.`
                }
              }})
              }}>Rent a motorhome and admire Alaska landscape</li>

              <li onClick={()=>{
                setItem({name:'Enjoy the beauty of nature in National Denali Park',img:{
                    first:'/Images/Denali/denali-national-park-g32f0dae85_640.jpg',
                    second:'/Images/Denali/marmot-g2a413b880_640.jpg',
                    third: '/Images/Denali/moose-g4e34e03c5_640.jpg'
                },atractions:{
                  first: {
                    name:'Denali Park Zipline Adventure',
                    description: `Your adventure begins with a three-mile railroad ride through scenic wild Alaska. Once you've geared up, your certified guide will lead you along six bridges in the sky and seven thrilling ziplines, including a double race finale.

                    The built-in hands-free braking system allows you to relax and enjoy the breathtaking mountain views. Take on the challenge as you climb to the top of the boreal forest on the uniquely designed tower of the ascending bridge.
                    
                    
                    
                    Glide through trees and tundra on over half a mile of zip lines. Finish this one-of-a-kind adventure by racing to the finish with your friends and family.`
                  },
                  second:{
                    name: 'Denali National Park: Wilderness ATV Adventure',
                    description: `Embark on an action-packed adventure in Alaska. Whether you are a novice or an expert ATVer, this tour will prepare you for an unforgettable experience in the Alaskan wilderness on your own automatic single ATV or side-by-side multiplayer ATV.

                    Driving along trails flanked by Denali National Park at speeds up to 30mph, your adventure includes breathtaking 360-degree scenic stops overlooking the Alaska Range, Lake Otto, and the Healy Valley.
                    
                    Navigate rocky creek beds and even spend time splashing around in the water (weather permitting). Experienced guides will lead you through the rugged terrain and provide photo opportunities.
                    
                    The wildlife is plentiful - watch out for moose on the trail. The total route of the tour is approximately 10 miles with 1.5 hours on the trails. The length of the tour is approximately 2.5 hours from pickup to pickup.`
                  },
                  third: {
                    name: 'Denali: Denali National Park Walking Tour',
                    description: `Enjoy a 3-hour guided walk. Immerse yourself in the wildness and grandeur of Alaska's amazing landscape.

                    Meet your guide at your hotel. Hop in the van for a short drive and meet your small group of up to 7 travelers. Get ready for a guided walk along one of the many beautiful trails on the north side of the Alaska Range.
                    
                    Learn about the animals, people, and plants of Denali from your expert local guide. Admire the unique natural landscape as you traverse the trail. Enjoy stopping for rest and conversation along the way, and even pick blueberries when in season.
                    
                    Bring your camera and curiosity about this amazing landscape. After completing the trail, relax in the van as you drive back to your accommodation in Denali.`
                  }
                }})
              }}>Trips to Denali Nation Park with a guide</li>

              <li onClick={()=>{
                setItem({name:'Fishing is pure pleasure with us, if you need equipment, you will find it with us!',img:{
                    first:'/Images/Fishing/boat-ga1168822d_640.jpg',
                    second:'/Images/Fishing/fishing-g10e0ed3b9_640.jpg',
                    third: '/Images/Fishing/rod-g7a2558edb_640.jpg'
                },
              atractions:{
                first: {
                  name: 'Visit the capital of fishing - Yakutat',
                  description: `Rent fishing gear here and fish in one of the world's most angler-friendly locations`
                },
                second: {
                  name: 'Guided fishing on the Kenai Peninsula',
                  description: `
                  Expeditions to Alaska to the Kenai Peninsula. Trips for large salmon (5 species of salmon, including the largest King Salmon and others Kidney Salmon, Silver Salmon, Pink Salmon, Sockeye Salmon), for trout (Brown Trout, Rainbow Trout, Steelhead, Dolly Varden, Arctic Char) as well as smoke and grayling .`
                },
                third: {
                  name: 'Enjoy Nowitna',
                  description: `Rent fishing gear here and fish in one of the world's most angler-friendly locations`
                }
              }})
              }}>Rent a fishing equipment</li>
            </ul>
        </nav>
        <Item info={item} />
        </div>
        
    )
}
export default ShopMain