import React from "react";
import Cart from "../components/Cart";
import { countCartItems } from "../lib/helpers";


export default class ReviewOrder extends React.Component {
  render() {
    const { cart, vendor, location } = this.props;
    return (
      <div>
        <Cart
          cart={cart}
          vendor={vendor}
          location={location}
        />
      </div>
    );
  }
}
