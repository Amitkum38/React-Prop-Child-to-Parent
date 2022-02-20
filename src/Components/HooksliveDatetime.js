import React, { useState } from 'react';

const HooksliveDatatime =() =>{
    
    let newtime =  new  Date().toLocaleTimeString();
    
    const [ctime, settime] = useState(newtime); 
   
    const updateTime = () =>{

        let newtime =  new  Date().toLocaleTimeString();
        
        settime(newtime);
        //console.log('click' + newtime)

    }
   return(
       <>
       <div className="centerblock">
          <h3>{ctime}</h3>
          <button onClick={updateTime}  className="button">Click</button>
        </div>
       </>
   );
};

export default  HooksliveDatatime;