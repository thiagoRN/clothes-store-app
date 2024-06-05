import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Product = ({}) => {
  const {_id, productName, imageURL, productPrice } = useLoaderData();
  return (
    <div  className='flex flex-col h-screen mx-6 mt-32'>
      
        <img src={imageURL} alt="" className='h-64 w-64'/>
        <h2>{productName}</h2>
      
    </div>
  )
}

export default Product