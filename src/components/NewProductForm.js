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
import CircularProgress from "@material-ui/core/CircularProgress";

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
  progress: {
    margin: theme.spacing.unit * 2
  },
  actions: {
    display: "flex",
    flexDirection: "row"
  }
});

class AddProductForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      category: "",
      productCategoryId: "",
      price: "",
      units: "",
      vendor: "",
      productVendorId: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleVendorChange = this.handleVendorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._formIsValid = this._formIsValid.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  _formIsValid() {
    const { name, category, price, units, vendor } = this.state;
    if (!name || !category || !price || !units || !vendor) {
      return false;
    } else {
      return true;
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this._formIsValid()) return;
    this.setState({ loading: true });
    const { onProductSubmit } = this.props;
    const {
      name,
      productCategoryId,
      price,
      units,
      productVendorId
    } = this.state;
    const product = {
      input: { name, productCategoryId, price, units, productVendorId }
    };
    console.log(await API.graphql(graphqlOperation(createProduct, product)));
    onProductSubmit();
    this.setState({
      loading: false,
      name: "",
      category: "",
      price: "",
      units: "",
      vendor: "",
      productVendorId: ""
    });
  }

  handleVendorChange(event) {
    console.log(this.props);
    const { vendors } = this.props;
    const selectedVendorName = event.target.value;
    const vendor = vendors.find(vendor => vendor.name === selectedVendorName);
    this.setState({ vendor: vendor.name, productVendorId: vendor.id });
  }

  handleCategoryChange(event) {
    const { categories } = this.props;
    const selectedCategoryName = event.target.value;
    const category = categories.find(
      category => category.name === selectedCategoryName
    );
    this.setState({ category: category.name, productCategoryId: category.id });
  }

  render() {
    const { classes, vendors, categories } = this.props;
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
              value={this.state.name}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              id="category"
              name="category"
              label="Category"
              value={this.state.category}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid> */}
          <Grid item xs={6} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              value={this.state.price}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="units"
              name="units"
              label="Units"
              value={this.state.units}
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
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleCategoryChange}
                name="category"
              >
                {categories.map(category => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
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
            <div>
              {this.state.loading ? (
                <CircularProgress className={classes.progress} />
              ) : (
                <div id="no-loader" />
              )}
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddProductForm);
