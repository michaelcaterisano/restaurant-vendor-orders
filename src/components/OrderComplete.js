import React from 'react';

class OrderComplete extends React.Component {

  componentDidMount() {
    const { toggleOrdering, emptyCart } = this.props;
    toggleOrdering();
    emptyCart();
  }
  render() {
    return (
      <div>order complete</div>
    )
  }
}

export default OrderComplete;