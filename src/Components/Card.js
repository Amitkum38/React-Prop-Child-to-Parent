import React from 'react';
function Card(props){
    return(
      <>
          <div className="card card--12">
              <h2 className="card__title">{props.cardtitle}</h2>
              <img className="card__img" src={props.cardimg} alt="random img"/>
              <p className="card__text">{props.cardtext}</p>
              <a className="card__btn" href={props.cardbtnlink}>buy me</a>
          </div>
          </>
    )
  }
  export default Card