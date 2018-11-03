import React from "react";
import pluralize from 'pluralize';

const ProductCart = ({ name, quantity, unit }) => {
  const pluralizedQuantity = pluralize(unit, quantity)
  return (
  <div>
    <div>{name}, {quantity} {pluralizedQuantity} </div>
  </div>
)};

export default ProductCart;
