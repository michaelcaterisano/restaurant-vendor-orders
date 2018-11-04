import React from "react";
import pluralize from "pluralize";

const ProductCart = ({ name, quantity, unit }) => {
  const pluralizedQuantity = pluralize(unit, quantity);
  return (
    <div>
      <div>
        {quantity} {pluralizedQuantity} {name}
      </div>
    </div>
  );
};

export default ProductCart;
