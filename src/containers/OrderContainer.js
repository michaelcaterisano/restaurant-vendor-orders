import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';


const OrderContainer = ({ products, addToCart, removeFromCart }) => (
  <ProductList>
    {products.map(product => 
      <ProductItem
        key={product.id} 
        product={product}
        onAddToCartClicked={() => addToCart(product)}
        onRemoveFromCartClicked={() => removeFromCart(product)} />
    )}
  </ProductList>
)

OrderContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default OrderContainer;