import React from 'react';
import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Info from './components/Info';
import Slider from './components/Slider';
import Menu from './components/Menu';
import ShopPage from './components/ShopPage';


import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
   
    
  
    <Routes>
      <Route path='/' element={<div>
        <Menu />
        <Main />
        <Info />
        <Slider />
      </div>}/>
      <Route path='/shopPage' element={
      <div>
        <Menu />
        <Main />
         <ShopPage />
      </div>
     }/>
    
  
   
    

    </Routes>
  
    
   
   

     
     
     
    </div>
  );
}

export default App;
