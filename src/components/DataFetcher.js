// DataFetcher.js
import React, { useState, useEffect } from 'react';
import CommonHeader from './CommonHeader.js'
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
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <table border={1} cellPadding={5} className='table-style'>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {
            list?.length > 0 && list?.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              )
            })
          }
        </table>
  
      </div>
    </>
  );
}

export default DataFetcher;
