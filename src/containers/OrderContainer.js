import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder, createProductOrder } from "../graphql/mutations";
import { countCartItems, organizeCartByVendor } from "../lib/helpers";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import OrderProducts from "../components/OrderProducts";
import VendorLocationForm from "../components/VendorLocationForm";
import ReviewOrder from "../components/ReviewOrder";
import OrderComplete from "../components/OrderComplete";
import OrderFailed from "../components/OrderFailed";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router";
import { Prompt } from "react-router";

const styles = theme => ({
  buttons: {
    // display: "flex",
    // justifyContent: "flex-end"
  },
  actionsGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 10
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
    // [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
    //   width: 600,
    //   marginLeft: "auto",
    //   marginRight: "auto"
    // }
  }
});

const steps = [
  "Select location",
  "Select products",
  "Review order",
  "Order complete"
];

class OrderContainer extends React.Component {
  state = {
    activeStep: 0,
    selectedLocation: { name: "" }
  };

  createOrder = async () => {
    const { cart } = this.props;
    const { selectedLocation } = this.state;
    const cartByVendor = organizeCartByVendor(cart);
    const vendorIds = Object.keys(cartByVendor);
    try {
      const responses = vendorIds.map(async vendorId => {
        const products = cartByVendor[vendorId];
        const order = {
          input: {
            name: selectedLocation.name,
            orderLocationId: selectedLocation.id,
            orderVendorId: vendorId
          }
        };
        try {
          const response = await API.graphql(
            graphqlOperation(createOrder, order)
          );
          const orderId = response.data.createOrder.id;
          const result = await this.createProductOrder(
            orderId,
            products
          );
          return true;
        } catch (err) {
          console.log("create order error", err);
          return false;
        }
      });
      const success = await Promise.all(responses)
      console.log('create order success ', success)
      return success.every(el => el === true);

    } catch (err) {
      console.log("createOrder error ", err);
    }
  };

  createProductOrder = async (orderId, products) => {
    const { emptyCart } = this.props;
    try {
      console.log('products ', products)
      const responses = products.map(async product => {
        const productOrder = {
          input: {
            productOrderProductId: product.id,
            productOrderOrderId: orderId
          }
        };
        try {
          const response = await API.graphql(
            graphqlOperation(createProductOrder, productOrder)
          );
          console.log("create productOrder success", response);
          emptyCart();
          return true;
        } catch (err) {
          console.log("create productOrder failed", err);
          return false;
        }
      });
      const success = await Promise.all(responses);
      return success.every(el => el === true);
    } catch (err) {
      console.log("productOrder error", err);
    }
  };

  getStepContent = step => {
    const {
      locations,
      vendors,
      cart,
      addToCart,
      removeFromCart,
      products,
      categories,
      units,
      listProducts
    } = this.props;
    const { selectedLocation } = this.state;
    switch (step) {
      case 0:
        return (
          <VendorLocationForm
            locations={locations}
            vendors={vendors}
            selectedLocation={selectedLocation}
            onSelectVendor={this.handleVendorChange}
            onSelectLocation={this.handleLocationChange}
          />
        );
      case 1:
        return (
          <OrderProducts
            cart={countCartItems(cart)}
            products={products}
            categories={categories}
            units={units}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            selectedLocation={selectedLocation}
            listProducts={listProducts}
          />
        );
      case 2:
        return (
          <ReviewOrder
            cart={countCartItems(cart)}
            selectedLocation={selectedLocation}
          />
        );
      case 3:
        return <OrderFailed />;
      case 4:
        return <OrderComplete />;
      default:
        throw new Error("Unknown step");
    }
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleVendorChange = vendor => {
    this.setState({ selectedVendor: vendor });
  };

  handleLocationChange = location => {
    this.setState({ selectedLocation: location });
  };

  handleNext = () => {
    const { toggleOrdering, cart } = this.props;
    const { selectedLocation, selectedVendor, activeStep } = this.state;
    // clean this up. switch?
    if (!selectedLocation) {
      alert("please select a vendor and location");
      return;
    } else if (activeStep === 0) {
      toggleOrdering();
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    } else if (activeStep === 1) {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    } else if (activeStep === 2) {
      if (!cart.length) {
        alert("add some products to your cart first");
        return;
      }
      const success = this.createOrder();
      if (success) {
        toggleOrdering();
        this.setState({ activeStep: 4 });
      } else {
        this.setState({ activeStep: 3 });
      }
    }
  };

  handleBack = () => {
    const { toggleOrdering } = this.props;
    const { activeStep } = this.state;
    if (activeStep === 1) {
      this.setState(
        state => ({
          activeStep: state.activeStep - 1
        }),
        () => toggleOrdering()
      );
    } else {
      this.setState(state => ({
        activeStep: state.activeStep - 1
      }));
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  // organizeCartByVendor = () => {
  //   const { cart } = this.props;
  //   const cartByVendor = {};
  //   for (let i = 0; i < cart.length; i++) {
  //     const product = cart[i];
  //     const vendorId = product.vendor.id;
  //     if (typeof cartByVendor[vendorId] == "undefined") {
  //       cartByVendor[vendorId] = [];
  //       cartByVendor[vendorId].push(product);
  //     } else {
  //       cartByVendor[vendorId].push(product);
  //     }
  //   }
  //   return cartByVendor;
  // };

  render() {
    console.log(organizeCartByVendor(this.props.cart));
    const { classes, ordering, orderTotal } = this.props;
    const { activeStep } = this.state;
    return (
      <React.Fragment>
        <Prompt
          when={ordering}
          message={location =>
            location.pathname.startsWith("/order")
              ? true
              : "Are you sure? Your current order will not be saved."
          }
        />
        <main className={classes.layout}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              <div className={classes.actionsGroup}>
                {activeStep > 0 && activeStep < 3 ? (
                  <Typography variant="headline">
                    Total: ${orderTotal}
                  </Typography>
                ) : (
                  <div />
                )}
                {activeStep === 3 || activeStep === 4 ? null : (
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 2 ? "Place order" : "Next"}
                    </Button>
                  </div>
                )}
              </div>

              {this.getStepContent(activeStep)}
            </React.Fragment>
          </React.Fragment>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(OrderContainer));
