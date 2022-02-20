import React from 'react';

const SlotM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z = '🈂️'; 

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x, y,z} =props;



 if ((props.x===props.y) && (props.y===props.z)) {
  return(
    <>
     <h1>{x} {y} {z}</h1>
     <h2> This is Machine</h2>
    
    </>
  )
   
 } else {
  return(
    <>
     <h1>{x} {y} {z}</h1>
     <h2> This is Not Machine</h2>
     
    </>
  )
   
 }

}

const SlotMachine = () =>{
    return(
        <>
          <div className="heading">
          <h1>  Welcome to <span  style={{ fontWeight:"bold"}}> Slot Machine Games</span>  </h1>
          </div>
          <div className="SlotMachine-col">
           <div className="Slotcard"><SlotM x='😄' y='🍎' z='😄'/></div>
           <div className="Slotcard"><SlotM x='😄' y='😄' z='😄'/></div>  
           <div className="Slotcard"><SlotM x='😄' y='😄' z='🎅'/></div>   
          
          </div>
        </>
    )
}

 export default SlotMachine
