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
import withStyles from "@material-ui/core/styles/withStyles";

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
    vendor: "",
    location: ""
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  getStepContent = step => {
    const { locations, vendors, cart, ...props } = this.props;
    const { vendor, location } = this.state;
    switch (step) {
      case 0:
        return (
          <VendorLocationForm
            locations={locations}
            vendors={vendors}
            vendor={vendor}
            location={location}
            onSelect={this.handleChange}
          />
        );
      case 1:
        return <OrderProducts cart={cart} vendor={vendor} location={location} {...props} />;
      case 2:
        return <ReviewOrder cart={cart} vendor={vendor} location={location}/>;
      default:
        throw new Error("Unknown step");
    }
  };

  handleNext = () => {
    const { location, vendor } = this.state;
    if (!location || !vendor) {
      alert("please select a vendor and location");
      return;
    } else {
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
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
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
                <Typography variant="subtitle1">the end</Typography>
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

export default withStyles(styles)(OrderContainer);
