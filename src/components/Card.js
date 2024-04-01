// Card.js
import React from 'react';

function Card(props) {
  return (
    <>
      <div className='card-style'>
        <img src={props.data.image} alt='' className='card-image'/>
        <div className='card-text'>
          <h5>{props.data.title}</h5>
          <p>{props.data.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
