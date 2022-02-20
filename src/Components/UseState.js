import React, { useState } from 'react';

const UseStateApp = () => {
    const state = useState();
    //console.log(state);
   const [count, setCount] = useState(0);

   const Incnum = () => {
       setCount(count + 1);
        // console.log("Clicked" + count++);
    };

    return (
        <>
            <div className="centerblock">
                <h3>{count}</h3>
                <button onClick={Incnum} className="button">Click</button>
            </div>
        </>
    );
};
export default UseStateApp;