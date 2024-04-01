// TodoItem.js
import React from 'react';
import CommonHeader from './CommonHeader.js'
import { useSelector } from 'react-redux';

function TodoItem() {
  const item = useSelector(state => state.todo.item)

  return (
    <>
      <div align='center'>
        <CommonHeader />
        <h2>Title: {item.title}</h2>
        <p>Description: {item.description}</p>
      </div>
    </>
  );
}

export default TodoItem;
