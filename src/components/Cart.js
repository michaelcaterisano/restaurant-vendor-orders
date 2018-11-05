import React from 'react';
import ProductCart from './ProductCart';

const Cart = ({ cart, selectedVendor, selectedLocation }) => {
  const hasProducts = cart.length > 0
  const nodes = hasProducts ? (
    cart.map(product => 
      <ProductCart
        key={product.id}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        unit={product.unit.name} />
  )) : (<div> cart empty </div>)

  return (
    <div>
      <p>Hi {selectedVendor.repName}! Order for Tampopo {selectedLocation.name}.</p>
      <div> {nodes} </div>
      <br></br>
      <p>Thanks!</p>
    </div>
  )
}

export default Cart;