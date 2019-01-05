import React from "react";
import Cart from "../components/Cart";
import { countCartItems } from "../lib/helpers";


export default class ReviewOrder extends React.Component {
  render() {
    const { cart, selectedLocation } = this.props;
    return (
      <div>
        <Cart
          cart={cart}
          selectedLocation={selectedLocation}
        />
      </div>
    );
  }
}
