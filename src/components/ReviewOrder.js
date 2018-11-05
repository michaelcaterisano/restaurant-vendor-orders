import React from "react";
import Cart from "../components/Cart";
import { countCartItems } from "../lib/helpers";


export default class ReviewOrder extends React.Component {
  render() {
    const { cart, selectedVendor, selectedLocation } = this.props;
    return (
      <div>
        <Cart
          cart={cart}
          selectedVendor={selectedVendor}
          selectedLocation={selectedLocation}
        />
      </div>
    );
  }
}
