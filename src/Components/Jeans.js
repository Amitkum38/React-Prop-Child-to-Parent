import React from 'react';
import Card from './Card';
import Data from './Data';

const  Jeans = () =>{
    return(
      <Card 
        key={Data[3].id}
        cardtitle={Data[3].cardtitle}
        cardimg={Data[3].cardimg}
        cardtext={Data[3].cardtext}
        cardbtnlink={Data[3].cardbtnlink}
    />
    );   
}

export default Jeans;