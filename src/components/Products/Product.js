// import React from 'react'
import './Product.css'
import React, { useState } from 'react'
const Product = (props) => {
    const [price,setPrice]=useState(props.price);
    const priceChangedHandler=()=>{
        setPrice(price+10);
    }
    const [quan,setQuan]=useState(1);
    const quanChangedHandlerAdd=()=>{
        setQuan(quan+1);
    }
    const quanChangedHandlerSub=()=>{
        if(quan>0){
        setQuan(quan-1);
        }
    }
  return (
    <div className="pro" >
        <img src={props.img} alt='abc' onClick={priceChangedHandler}/>
        <h3>{props.name}</h3>
        <p>${price}</p>
        <p>Quantity:{quan}</p>
        <div className='btn'>
        <button onClick={quanChangedHandlerAdd} className='buttons'>Add+</button>
        <button onClick={quanChangedHandlerSub} className='buttons'>Sub-</button>
        </div>
    </div>
  )
}

export default Product;