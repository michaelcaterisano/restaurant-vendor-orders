import React from "react";
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
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router";
import { ConsoleLogger } from "@aws-amplify/core";
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

const steps = ["Select vendor and location", "Select products", "Review order"];

class OrderContainer extends React.Component {
  state = {
    activeStep: 0,
    selectedVendor: "",
    selectedLocation: ""
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
    const { locations, vendors, cart, ...props } = this.props;
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
            cart={cart}
            selectedVendor={selectedVendor}
            selectedLocation={selectedLocation}
            {...props}
          />
        );
      case 2:
        return (
          <ReviewOrder
            cart={cart}
            selectedVendor={selectedVendor}
            selectedLocation={selectedLocation}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  handleNext = () => {
    const { toggleOrdering } = this.props;
    const { selectedLocation, selectedVendor } = this.state;
    if (!selectedLocation || !selectedVendor) {
      alert("please select a vendor and location");
      return;
    } else {
      toggleOrdering();
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
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
    const { classes, ordering, toggleOrdering, emptyCart } = this.props;
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
            {activeStep === steps.length ? (
              <React.Fragment>
                <OrderComplete
                  toggleOrdering={toggleOrdering}
                  emptyCart={emptyCart}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
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
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
                {this.getStepContent(activeStep)}
              </React.Fragment>
            )}
          </React.Fragment>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(OrderContainer));
