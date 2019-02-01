import React from "react";
import ProductList from "../components/ProductList";
import OrderItem from "../components/OrderItem";
import AppBar from "@material-ui/core/AppBar";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    background: "white"
  },
  formControl: {
    display: "flex",
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class OrderProducts extends React.Component {
  state = {
    selectedUnits: [],
    selectedCategories: [],
    favoriteFilter: false
  };

  componentDidMount() {
    this.props.listProducts();
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  locationFilter = product => {
    const { selectedLocation } = this.props;
    const productLocations = product.location.items.map(el => el.location.name);
    return productLocations.includes(selectedLocation.name);
  };

  unitFilter = product => {
    const { selectedUnits } = this.state;
    if (!selectedUnits.length) return true;
    else {
      const result = selectedUnits.findIndex(el => el === product.unit.name);
      return result !== -1;
    }
  };

  categoryFilter = product => {
    const { selectedCategories } = this.state;
    if (!selectedCategories.length) return true;
    else {
      const result = selectedCategories.findIndex(
        el => el === product.category.name
      );
      return result !== -1;
    }
  };

  favoriteFilter = product => {
    const { favoriteFilter } = this.state;
    if (favoriteFilter === false) return true;
    if (product.favorite === null) {
      return favoriteFilter === false;
    } else {
      return product.favorite === favoriteFilter;
    }
  };

  render() {
    const {
      classes,
      products,
      cart,
      addToCart,
      removeFromCart,
      categories,
      units,
      listProducts
    } = this.props;
    return (
      <div id="order-products">
        <AppBar color="default" position={"static"}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <span style={{ margin: "30px 0 0 10px" }}>Filter by: </span>
            <FormControl className={classes.formControl}>
              <InputLabel>Category</InputLabel>
              <Select
                multiple
                value={this.state.selectedCategories}
                onChange={this.handleChange}
                input={<Input />}
                renderValue={selected => selected.join(", ")}
                name="selectedCategories"
              >
                {categories.map(el => (
                  <MenuItem key={el.id} value={el.name}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Units</InputLabel>
              <Select
                multiple
                value={this.state.selectedUnits}
                onChange={this.handleChange}
                input={<Input />}
                renderValue={selected => selected.join(", ")}
                name="selectedUnits"
              >
                {units.map(el => (
                  <MenuItem key={el.id} value={el.name}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Favorites</InputLabel>
              <Select
                value={this.state.favoriteFilter}
                onChange={this.handleChange}
                name="favoriteFilter"
              >
                <MenuItem value={true}>Favorites</MenuItem>
                <MenuItem value={false}>View all</MenuItem>
              </Select>
            </FormControl>
          </div>
        </AppBar>
        <ProductList>
          {products
            .filter(this.locationFilter)
            .filter(this.unitFilter)
            .filter(this.categoryFilter)
            .filter(this.favoriteFilter)
            .map(product => (
              <OrderItem
                key={product.id}
                product={product}
                listProducts={listProducts}
                cart={cart}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
              />
            ))}
        </ProductList>
      </div>
    );
  }
}

export default withStyles(styles)(OrderProducts);
