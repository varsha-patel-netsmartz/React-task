// Counter.js
import React, { useState } from 'react';
import CommonHeader from './CommonHeader.js'

function Counter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter+1)
  }
  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <h2>Counter = {counter}</h2>
        <button onClick={updateCounter}>Click</button> <br/>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
