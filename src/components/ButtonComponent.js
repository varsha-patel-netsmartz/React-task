// ButtonComponent.js
import React from 'react';

function ButtonComponent(props) {
  return (
    <>
      <button onClick={props.clickbtn}>{props.text}</button>
    </>
  );
}

export default ButtonComponent;
