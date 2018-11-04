import React from 'react';
import ProductCart from './ProductCart';

const Cart = ({ cart, vendor, location }) => {
  const hasProducts = cart.length > 0
  const nodes = hasProducts ? (
    cart.map(product => 
      <ProductCart
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        unit={product.unit.name} />
  )) : (<div> cart empty </div>)

  return (
    <div>
      <div>Hi {vendor}! Order for Tampopo {location}.</div>
      <div> {nodes} </div>
      <div>Thanks!</div>
    </div>
  )
}

export default Cart;