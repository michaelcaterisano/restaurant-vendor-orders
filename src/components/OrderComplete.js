import React from "react";

class OrderComplete extends React.Component {
  render() {
    const { emptyCart, orderTotal } = this.props;
    const total = orderTotal;

    //emptyCart();
    // TODO: figure out why cannot call emptyCart() here
    return <div>order complete {total} </div>;
  }
}

export default OrderComplete;
