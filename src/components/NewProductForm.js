import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createProduct } from "../graphql/mutations";


//material-ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// styles
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 120
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-start"
    // border: '1px solid red'
  }
  // selectEmpty: {
  //   marginTop: theme.spacing.unit * 2,
  // },
});

// main class
class AddressForm extends Component {
  constructor() {
    super()

    this.state = { name: "", category: "", price: "", units: "", vendor: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field] : value })
  }

  async handleSubmit() {
    const { name, category, price, units, vendor } = this.state;
    const product = { input: { name: name, category: category, price: price, units: units, vendor: vendor } };
    await API.graphql(graphqlOperation(createProduct, product));
    this.props.onProductSubmit();

  }



  render() {
    console.log(this.state)
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Enter a new product
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="category"
              name="category"
              label="Category"
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField id="units" 
                       name="units" 
                       label="Units" 
                       fullWidth 
                       onChange={this.handleChange}
                       />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Vendor</InputLabel>
              <Select value={this.state.vendor} onChange={this.handleChange} name="vendor">
                <MenuItem value={"Sunrise"}>Sunrise</MenuItem>
                <MenuItem value={"MTC"}>MTC</MenuItem>
                <MenuItem value={"Union Beer"}>Union Beer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* <Grid item xs={6}>
              <TextField id="defaultOrderQuantityt" name="defaultOrderQuantity" label="Default Order Quantity" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="maxOrder" name="maxOrder" label="maxOrder" fullWidth />
            </Grid> */}
          <Grid item xs={12}>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Create Product
              </Button>
            </div>
          </Grid>

          {/* <FormHelperText>Some important helper text</FormHelperText> */}

          {/* <Grid item xs={12} sm={6}>
            <TextField
              id="addiress2"
              name="addiress2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid> */}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddressForm);
