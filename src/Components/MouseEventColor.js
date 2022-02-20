import React, { useState } from 'react';

const MouseEventColor = () =>{
       const blue = "#0248ca";
       const [bg, setbg] =  useState(blue);
       const [Name, setName] =  useState('Click');


       const  backbg = () =>{
           //console.log('Hello');
           setbg(blue);
  
       }
       const clickchangebtn = () =>{
           //console.log('click' );
           let newbg = "#ca3002";
           setbg(newbg);
           setName('Hello');
       }


    return(
        <>
        <div className="centerblock" style={{backgroundColor:bg}}>
          
          <button onClick={clickchangebtn} onDoubleClick={backbg} onMouseLeave={clickchangebtn} className="button">{Name}</button>
        </div>
        </>
    );
};
export default MouseEventColor;