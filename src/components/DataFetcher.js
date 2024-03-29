// DataFetcher.js
import React, { useState, useEffect } from 'react';
import CommonHeader from './CommonHeader.js'
import ButtonComponent from './ButtonComponent.js'
import { useDispatch } from 'react-redux'
import { dataFetcher } from '../api/slices/dataFetcher'

function DataFetcher() {
  const [list, setList] = useState([]);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dataFetcher())
    .unwrap()
    .then((response) => {
      setList(response.data)
    })
    .catch((error) => {

    })
  })

  const handleClick = (item) => {
    console.log(item)
  }
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <table border={1} cellPadding={5} className='table-style'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list?.length > 0 && list?.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><ButtonComponent text='Click Me!' clickbtn={() => handleClick(item)}/></td>
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

export default DataFetcher;
