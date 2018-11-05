import React from 'react';

class OrderComplete extends React.Component {

  componentDidMount() {
    const { toggleOrdering, emptyCart } = this.props;
    toggleOrdering();
    emptyCart();
  }
  render() {
    return (
      <div>order failed</div>
    )
  }
}

export default OrderComplete;