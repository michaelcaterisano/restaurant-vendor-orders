import React from "react";
import Cart from "../components/Cart";

export default class ReviewOrder extends React.Component {
  render() {
    const { cart, selectedLocation } = this.props;
    return (
      <div>
        <Cart cart={cart} selectedLocation={selectedLocation} />
      </div>
    );
  }
}
