import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder, createProductOrder } from "../graphql/mutations";
import { countCartItems, organizeCartByVendor } from "../lib/helpers";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OrderProducts from "../components/OrderProducts";
import LocationForm from "../components/LocationForm";
import ReviewOrder from "../components/ReviewOrder";
import OrderComplete from "../components/OrderComplete";
import OrderFailed from "../components/OrderFailed";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router";
import { Prompt } from "react-router";
//import { isMobile } from "react-device-detect";

const styles = (theme) => ({
  actionsGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  iconContainer: {
    margin: "0px",
    padding: "3px",
  },
  labelContainer: {
    padding: "0px",
    margin: "0px",
  },
  stepper: {
    margin: "10px 0 0 0",
    padding: "0px",
  },
  step: {
    margin: "0px",
    padding: "1px",
  },
});

const steps = ["Location", "Select", "Review", "Done"];

class OrderContainer extends React.Component {
  state = {
    activeStep: 0,
    selectedLocation: { name: "" },
  };

  createOrder = async () => {
    const { cart } = this.props;
    const { selectedLocation } = this.state;
    const cartByVendor = organizeCartByVendor(cart);
    const vendorIds = Object.keys(cartByVendor);
    try {
      const responses = vendorIds.map(async (vendorId) => {
        const products = cartByVendor[vendorId];
        const order = {
          input: {
            name: selectedLocation.name,
            orderLocationId: selectedLocation.id,
            orderVendorId: vendorId,
          },
        };
        try {
          const response = await API.graphql(
            graphqlOperation(createOrder, order)
          );
          const orderId = response.data.createOrder.id;
          const result = await this.createProductOrder(orderId, products);
          console.log("create productOrder ", result);
          return true;
        } catch (err) {
          console.log("create order error", err);
          return false;
        }
      });
      const success = await Promise.all(responses);
      console.log("create order success ", success);
      return success.every((el) => el === true);
    } catch (err) {
      console.log("createOrder error ", err);
    }
  };

  createProductOrder = async (orderId, products) => {
    //const { emptyCart } = this.props;
    try {
      const responses = products.map(async (product) => {
        const productOrder = {
          input: {
            productOrderProductId: product.id,
            productOrderOrderId: orderId,
          },
        };
        try {
          const response = await API.graphql(
            graphqlOperation(createProductOrder, productOrder)
          );
          console.log("create productOrder success", response);
          //emptyCart();
          return true;
        } catch (err) {
          console.log("create productOrder failed", err);
          return false;
        }
      });
      const success = await Promise.all(responses);
      return success.every((el) => el === true);
    } catch (err) {
      console.log("productOrder error", err);
    }
  };

  getStepContent = (step) => {
    const {
      locations,
      vendors,
      cart,
      addToCart,
      removeFromCart,
      products,
      categories,
      units,
      listProducts,
      orderTotal,
      emptyCart,
    } = this.props;
    const { selectedLocation } = this.state;
    switch (step) {
      case 0:
        return (
          <LocationForm
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
        return <OrderComplete orderTotal={orderTotal} emptyCart={emptyCart} />;
      default:
        throw new Error("Unknown step");
    }
  };

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleVendorChange = (vendor) => {
    this.setState({ selectedVendor: vendor });
  };

  handleLocationChange = (location) => {
    this.setState({ selectedLocation: location });
  };

  handleNext = () => {
    const { toggleOrdering, cart } = this.props;
    const { selectedLocation, activeStep } = this.state;
    // clean this up. switch?
    if (!selectedLocation) {
      alert("please select a vendor and location");
      return;
    } else if (activeStep === 0) {
      toggleOrdering();
      this.setState((state) => ({
        activeStep: state.activeStep + 1,
      }));
    } else if (activeStep === 1) {
      this.setState((state) => ({
        activeStep: state.activeStep + 1,
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
    const { resetOrdering } = this.props;
    const { activeStep } = this.state;
    if (activeStep === 1) {
      alert("Are you sure? Your current order will not be saved.");
      this.setState(
        (state) => ({
          activeStep: state.activeStep - 1,
        }),
        () => resetOrdering()
      );
    } else {
      this.setState((state) => ({
        activeStep: state.activeStep - 1,
      }));
    }
  };

  render() {
    const { classes, ordering, orderTotal } = this.props;
    const { activeStep } = this.state;
    return (
      <React.Fragment>
        <Prompt
          when={ordering}
          message={(location) =>
            location.pathname.startsWith("/order")
              ? true
              : "Are you sure? Your current order will not be saved."
          }
        />
        <main className={classes.layout}>
          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label} className={classes.step}>
                <StepLabel
                  classes={{
                    iconContainer: classes.iconContainer,
                    labelContainer: classes.labelContainer,
                  }}
                >
                  {label}
                </StepLabel>
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
