import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createVendor, deleteVendor } from "../graphql/mutations";

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
import CircularProgress from '@material-ui/core/CircularProgress';



/* 
  TODO: 
  - Cache vendor names
  - call getVendors after product submit
  
*/

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    minWidth: 120
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-start"
  },
  vendor: {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    // border: "1px solid red"
  }, 
  loader: {
    margin: 10
  }
});

class AddVendorForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleVendorChange = this.handleVendorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { onVendorSubmit } = this.props;
    const vendor = {
      input: { name }
    };
    await API.graphql(graphqlOperation(createVendor, vendor));
    onVendorSubmit();
    // const product = {
    //   input: { name, category, price, units, productVendorId }
    // };
    // await API.graphql(graphqlOperation(createProduct, product));
    // onProductSubmit();
  }

  handleVendorChange(event) {
    const { vendors } = this.props;
    const selectedVendorName = event.target.value;
    const vendor = vendors.find(vendor => vendor.name === selectedVendorName);
    this.setState({ vendor: vendor.name, productVendorId: vendor.id });
  }

  async handleDeleteVendor(id) {
    const { onVendorSubmit } = this.props;
    const vendor = { input: { id }}
    await API.graphql(graphqlOperation(deleteVendor, vendor));
    onVendorSubmit();
  }

  render() {
    const { classes, vendors } = this.props;
    return (
      <React.Fragment>
        {/* <Typography variant="h6" gutterBottom>
          Enter a new product
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Vendor name"
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
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
            <TextField
              id="units"
              name="units"
              label="Units"
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Vendor</InputLabel>
              <Select
                value={this.state.vendor}
                onChange={this.handleVendorChange}
                name="vendor"
              >
                {vendors.map(vendor => (
                  <MenuItem key={vendor.id} value={vendor.name}>
                    {vendor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={12}>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Add Vendor
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        {
          vendors.length ? 
          <div>
            {vendors.map(vendor => (
              <div key={vendor.id} className={classes.vendor}>
                <Typography >{vendor.name}</Typography>
              </div>
            ))}
          </div> : 
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        }
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddVendorForm);
