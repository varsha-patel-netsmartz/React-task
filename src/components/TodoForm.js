// TodoForm.js
import React, {useState} from 'react';
import CommonHeader from './CommonHeader.js'
import ButtonComponent from './ButtonComponent.js';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../api/slices/todoSlice.js';
function TodoForm() {
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const list = useSelector(state => state.todo.list)

  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    // list.push({id: list?.length+1, title: title, description: description})
    dispatch(addItem({id: list?.length+1, title: title, description: description}))
    alert('Item added successfully.')
    setTitle('')
    setDescription('')
  }
  return (
    <>
      <div>
        <CommonHeader />
        <form className='todo-form'>
          <label>Title:
            <input
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{margin: 10}}
            />
          </label><br />
          <label>Description:
              <input 
                type="textarea" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{margin: 10}}
              />
          </label><br />
          <ButtonComponent text='Submit' clickbtn={handleSubmit}/>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
