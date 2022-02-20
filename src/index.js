import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import UseStateApp from './Components/UseState';
// import App from './App';
// import SlotMachine from './Components/SlotMachine';
// import HooksliveDatetime from './Components/HooksliveDatetime';
//import HooksliveDatetimesystem from './Components/HooksliveDatetimesystem';
import MouseEventColor from './Components/MouseEventColor';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SlotMachine/> */}
    {/* <UseStateApp/> */}
    {/* <HooksliveDatetime/> */}
    {/* <HooksliveDatetimesystem/> */}
    <MouseEventColor/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
