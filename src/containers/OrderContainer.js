import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder, createProductOrder } from "../graphql/mutations";
import { asyncForEach, countCartItems } from "../lib/helpers";
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
    display: "flex",
    justifyContent: "flex-end"
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
  "Select vendor and location",
  "Select products",
  "Review order",
  "Order complete"
];

class OrderContainer extends React.Component {
  state = {
    activeStep: 0,
    selectedVendor: "",
    selectedLocation: ""
  };

  createOrder = async () => {
    const { selectedVendor, selectedLocation } = this.state;
    const order = {
      input: {
        name: selectedVendor.name + selectedLocation.name,
        orderLocationId: selectedLocation.id,
        orderVendorId: selectedVendor.id
      }
    };
    try {
      const response = await API.graphql(graphqlOperation(createOrder, order));
      console.log("create order success", response);
      const orderId = response.data.createOrder.id;
      const result = await this.createProductOrder(orderId);
      console.log("createProductOrder success", result);
      return result;
    } catch (err) {
      console.log("create order error", err);
      return false;
    }
  };

  createProductOrder = async orderId => {
    const { cart, emptyCart } = this.props;
    try {
      const responses = cart.map(async product => {
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
      console.log("productOrder success", success);

      return success.every(el => el === true);
    } catch (err) {
      console.log("productOrder error", err);
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

  getStepContent = step => {
    const {
      locations,
      vendors,
      cart,
      toggleOrdering,
      emptyCart,
      ...props
    } = this.props;
    const { selectedLocation, selectedVendor } = this.state;
    switch (step) {
      case 0:
        return (
          <VendorLocationForm
            locations={locations}
            vendors={vendors}
            onSelectVendor={this.handleVendorChange}
            onSelectLocation={this.handleLocationChange}
          />
        );
      case 1:
        return (
          <OrderProducts
            // do this lower
            cart={countCartItems(cart)}
            selectedVendor={selectedVendor}
            selectedLocation={selectedLocation}
            {...props}
          />
        );
      case 2:
        return (
          <ReviewOrder
            cart={countCartItems(cart)}
            selectedVendor={selectedVendor}
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

  handleNext = () => {
    const { toggleOrdering, emptyCart } = this.props;
    const { selectedLocation, selectedVendor, activeStep } = this.state;
    // clean this up. switch?
    if (!selectedLocation || !selectedVendor) {
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
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes, ordering } = this.props;
    const { activeStep } = this.state;
    return (
      <React.Fragment>
        <Prompt
          when={ordering}
          message={"Are you sure? Your current order will not be saved."}
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

              {this.getStepContent(activeStep)}
            </React.Fragment>
          </React.Fragment>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(OrderContainer));
