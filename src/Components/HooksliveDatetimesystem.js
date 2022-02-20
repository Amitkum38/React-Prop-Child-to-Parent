import React, { useState } from 'react';

const HooksliveDatetimesystem = () =>{
  let Time = new Date().toLocaleTimeString();
  const [ctime, SetTime] = useState(Time);
 
  
   
   

  

    const updateTime = () =>{
       //console.log(Time);
       let Time = new Date().toLocaleTimeString();
       SetTime(Time);
    };

    setInterval(updateTime , 1000);

    return(
        <>
        <div className="centerblock">
          <h3>{ctime}</h3>
          <button onClick={updateTime}  className="button">Click</button>
        </div>
        </>
    );
};

export default HooksliveDatetimesystem;