// TodoList.js
import React, { useState } from 'react';
import CommonHeader from './CommonHeader.js'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, editItem, searchItem } from '../api/slices/todoSlice.js';
import ButtonComponent from './ButtonComponent.js'
import { useNavigate } from 'react-router-dom';

function TodoList() {
  const [searchText, setSearchText] = useState('')
  const list = useSelector(state => state.todo.list)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleDelete = (index) => {
    dispatch(deleteItem(index))
    alert('Item deleted successfully.')
  }

  const handleEdit = (item) => {
    dispatch(editItem(item))
    navigate('/edit-todo/'+item?.id)
  }

  const handleSearch = () => {
    dispatch(searchItem(searchText))
  }
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <input
          type="text" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{margin: 20}}
        />
        <ButtonComponent text='Search' clickbtn={() => handleSearch()}/>
        <table border={1} cellPadding={5} style={{marginTop: '10px'}}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              list?.length > 0 && list?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td><ButtonComponent text='Edit' clickbtn={() => handleEdit(item)}/></td>
                    <td><ButtonComponent text='Delete' clickbtn={() => handleDelete(index)}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoList;