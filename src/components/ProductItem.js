import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked, onRemoveFromCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      name={product.name}
      price={product.price}
      vendor={product.vendor}
      quantity={product.inventory} />
    <button
      onClick={onAddToCartClicked}>
      add
    </button>
    <button
      onClick={onRemoveFromCartClicked}>
      remove
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default ProductItem