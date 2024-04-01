// CardContainer.js
import React, {useState, useEffect} from 'react';
import CommonHeader from './CommonHeader.js'
import Card from './Card'
import { dataFetcher } from '../api/slices/dataFetcher'
import { useDispatch } from 'react-redux'


function CardContainer() {
  const image = 'https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium';

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
      <div className='card-container'>
        <CommonHeader />
        <div className='card-flex'>
          {
            list?.length > 0 && list.map((item, index) => {
              return (
                <Card key={item.id} data={{image: image, title: item.email, description: item.name}} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default CardContainer;
