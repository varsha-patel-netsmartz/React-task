// Counter.js
import React from 'react';
import CommonHeader from './CommonHeader.js'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../api/slices/counterSlice.js';

function CounterComponent() {
  const counter = useSelector(state => state.counter.value);

  const dispatch = useDispatch()

  const updateCounter = () => {
    dispatch(increment())
  }
  const incrementCounter = () => {
    dispatch(increment())
  }
  const decrementCounter = () => {
    dispatch(decrement())
  }
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <h2>Counter = {counter}</h2>
        <button onClick={updateCounter}>Click</button> <br/>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    </>
  );
}

export default CounterComponent;
