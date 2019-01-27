import React from "react";
import { organizeCartByVendor } from "../lib/helpers";
import OrderCard from "./OrderCard";

const styles = {
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }
};

class Cart extends React.Component {
  render() {
    const { cart, selectedLocation } = this.props;
    const cartByVendor = organizeCartByVendor(cart);
    const vendorIds = Object.keys(cartByVendor);
    const orders = vendorIds.map(vendorId => {
      return cartByVendor[vendorId];
    });

    return (
      <div style={styles.list}>
        {orders.map(order => {
          return (
            <OrderCard order={order} selectedLocation={selectedLocation} />
          );
        })}
      </div>
    );
  }
}

export default Cart;

/* DELETE */

// const Cart = ({ cart, selectedLocation }) => {
//   const hasProducts = cart.length > 0;
//   const cartByVendor = organizeCartByVendor(cart);
//   const vendorIds = Object.keys(cartByVendor);
//   const vendorOrder = hasProducts ? (
//     vendorIds.map(vendorId => {
//       return cartByVendor[vendorId];
//       // .map(product => (
//       //   <div>
//       //     {vendorId}
//       //     <ProductCart
//       //       key={product.id}
//       //       name={product.name}
//       //       price={product.price}
//       //       quantity={product.quantity}
//       //       unit={product.unit.name}
//       //     />
//       //   </div>
//       // ));
//     })
//   ) : (
//     <div> cart empty </div>
//   );

//   return;
// };

// const OrderCard = ({ order, selectedLocation }) => {
//   const vendor = order[0].vendor;
//   const products = order.map(product => {
//     const { quantity, name } = product;
//     const unit = pluralize(product.unit.name, quantity);
//     return (
//       <div>
//         {quantity} {unit} {name}
//       </div>
//     );
//   });
//   return (
//     <div style={{ border: "1px solid black", marginBottom: "10px" }}>
//       <div>
//         Hi {vendor.repName}! Order for Tampopo {selectedLocation.name}
//       </div>
//       <div>{products}</div>
//       <div>Thanks!</div>
//     </div>
//   );
// };
