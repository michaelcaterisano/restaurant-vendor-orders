import React from 'react';
import ProductCart from './ProductCart';
import Typography from "@material-ui/core/Typography";

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product => 
      <ProductCart
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        units={product.units} />
  )) : (<div> cart empty </div>)

  return (
    <div>
      <div> {nodes} </div>
    </div>
  )
}

export default Cart;