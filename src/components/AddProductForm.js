import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createProduct, createProductLocation } from "../graphql/mutations";

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
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap"
  },
  checkBoxes: {
    display: "flex",
    flexDirection: "row"
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
      productId: "",
      name: "",
      category: "",
      productCategoryId: "",
      price: "",
      vendor: "",
      productVendorId: "",
      unit: "",
      productUnitId: "",
      locations: [],
      loading: false,
      maxOrder: "",
      defaultOrder: "",
      notes: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this._createProductLocation = this._createProductLocation.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleVendorChange = this.handleVendorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._formIsValid = this._formIsValid.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  handleCheckboxChange = (event, location) => {
    if (this._isChecked(location)) {
      const newLocations = [...this.state.locations].filter(
        loc => loc.id !== location.id
      );
      this.setState({ locations: newLocations });
      console.log(newLocations);
      return;
    }
    this.setState({
      locations: [
        ...this.state.locations,
        { name: location.name, id: location.id }
      ]
    });
  };

  // move to /lib
  async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  async _createProductLocation() {
    // use map instead?
    await this.asyncForEach(this.state.locations, async location => {
      const productLocation = {
        input: {
          productLocationProductId: this.state.productId,
          productLocationLocationId: location.id
        }
      };
      try {
        const response = await API.graphql(
          graphqlOperation(createProductLocation, productLocation)
        );
        console.log("create productLocation success", response);
      } catch (err) {
        console.log("create productLocation failed", err);
      }
    });
    this.setState({ locations: [], productId: "" });
  }

  _isChecked(selectedLocation) {
    const result = this.state.locations.findIndex(
      location => location.id === selectedLocation.id
    );
    if (result !== -1) return true;
    else return false;
  }

  _formIsValid() {
    const { name, category, unit, vendor, locations } = this.state;
    if (!name || !category ||  !unit || !vendor || !locations.length) {
      return false;
    } else {
      return true;
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this._formIsValid()) {
      alert("please enter all required fields")
      return
    };
    this.setState({ loading: true });
    // const { onProductSubmit } = this.props;
    const {
      name,
      productCategoryId,
      price,
      productUnitId,
      productVendorId,
      maxOrder,
      defaultOrder,
      notes
    } = this.state;
    const product = {
      input: {
        name,
        productCategoryId,
        price: price.length ? price : null,
        productVendorId,
        productUnitId,
        maxOrder: maxOrder.length ? maxOrder : null,
        defaultOrder: defaultOrder.length ? defaultOrder : null,
        notes: notes.length ? notes : null
      }
    };
    try {
      const response = await API.graphql(
        graphqlOperation(createProduct, product)
      );
      console.log('createProduct success', response);
      const productId = response.data.createProduct.id;
      this.setState({ productId });
    } catch (err) {
      console.log(err);
    }
    this._createProductLocation();
    this.setState({
      name: "",
      category: "",
      price: "",
      vendor: "",
      unit: "",
      loading: false,
      maxOrder: "",
      defaultOrder: "",
      notes: "",
      productCategoryId: "",
      productVendorId: "",
      productUnitId: ""
    });
  }

  handleVendorChange(event) {
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

  handleUnitChange(event) {
    const { units } = this.props;
    const selectedUnitName = event.target.value;
    const unit = units.find(unit => unit.name === selectedUnitName);
    this.setState({ unit: unit.name, productUnitId: unit.id });
  }

  render() {
    const { classes, vendors, categories, units, locations } = this.props;
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
          <Grid item xs={12} sm={6}>
            <TextField
              id="price"
              name="price"
              label="Price"
              type="number"
              value={this.state.price}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="maxOrder"
              name="maxOrder"
              label="Max Order"
              type="number"
              value={this.state.maxOrder}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="defaultOrder"
              name="defaultOrder"
              label="Default Order"
              type="number"
              value={this.state.defaultOrder}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="vendor" required>Vendor</InputLabel>
              <Select
                fullWidth
                value={this.state.vendor}
                onChange={this.handleVendorChange}
                name="vendor"
                inputProps={{
                  id: "vendor"
                }}
              >
                {vendors.map(vendor => (
                  <MenuItem key={vendor.id} value={vendor.name}>
                    {vendor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category" required>Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleCategoryChange}
                name="category"
                inputProps={{
                  id: "category"
                }}
              >
                {categories.map(category => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="unit" required>Unit</InputLabel>
              <Select
                value={this.state.unit}
                onChange={this.handleUnitChange}
                name="unit"
                inputProps={{
                  id: "unit"
                }}
              >
                {units.map(unit => (
                  <MenuItem key={unit.id} value={unit.name}>
                    {unit.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="notes"
              name="notes"
              label="Unit notes"
              value={this.state.notes}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <FormLabel component="legend">Delivery Location</FormLabel>
              <FormGroup row={true}>
                {locations.map(location => (
                  <FormControlLabel
                    key={location.id}
                    control={
                      <Checkbox
                        key={location.id}
                        checked={this._isChecked(location)}
                        onChange={e => this.handleCheckboxChange(e, location)}
                        value={location.name}
                      />
                    }
                    label={location.name}
                  />
                ))}
              </FormGroup>
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
