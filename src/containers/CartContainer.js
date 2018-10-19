import React from 'react';
import Cart from '../components/Cart';

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
);

export default CartContainer;
