import React from 'react';
import Tshirt  from './Components/Tshirt';
import Jeans from './Components/Jeans';

import './App.css';

const  favoriteclothes ='Jeans';
const  Favorite = () =>{
  if (favoriteclothes === 'T-shirt') {
    return<Tshirt/>
  } 
    else {
    return<Jeans/>
    }
}


const App = () =>(


   <>
   <Favorite/>

   {favoriteclothes === 'Jeans' ?  <Tshirt/> :  <Jeans/>} 
  
   </>
);



export default App;
