import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ children }) => (
  <div>{children}</div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}

export default ProductsList