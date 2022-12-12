import React from 'react'
import Product from './Product'
import Basket from './Basket'
import { useRef } from 'react'
import { Link } from "react-router-dom";





function TicketsDetails(props) {

  return (
    <div>
        <h2>Buy your ticket</h2>
    {props.products.map((product) => (
      <Product key={product.id} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder}/>
    ))}

      <Link to="/arena-details">Choose your arena</Link>
    </div>
  )
}

export default TicketsDetails