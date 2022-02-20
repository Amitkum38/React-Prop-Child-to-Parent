import React from 'react';
import Card from './Card';
import Data from './Data';
const  Tshirt = () =>{
  
    return(
      <Card 
        key={Data[1].id}
        cardtitle={Data[1].cardtitle}
        cardimg={Data[1].cardimg}
        cardtext={Data[1].cardtext}
        cardbtnlink={Data[1].cardbtnlink}
    />
    );   
}

export default Tshirt;