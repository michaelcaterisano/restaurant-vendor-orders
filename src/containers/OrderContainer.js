import React from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";
import GridList from "@material-ui/core/GridList";
import ProductItem from "../components/ProductItem";
import AppBar from "@material-ui/core/AppBar";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { classExpression } from "babel-types";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background: "white",
  },
  formControl: {
    display: "flex",
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class OrderContainer extends React.Component {
  state = {
    location: ""
  };

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  locationFilter = product => {
    const { location } = this.state;
    if (location === "") return true;
    else {
      const result = product.location.items.filter(
        item => item.location.name === location
      );
      return result.length ? true : false;
    }
  };

  render() {
    const { classes, products, cart, addToCart, removeFromCart, locations } = this.props;
    return (
      <div>
        <AppBar color="default" position={"static"}>
          <div style={{ display: "flex", flexWrap: "wrap"}}>
            <span style={{ margin: "30px 0 0 10px"}}>Filter by: </span>
            <FormControl className={classes.formControl}>
              <InputLabel>Location</InputLabel>
              <Select
                authWidth={true}
                value={this.state.location}
                onChange={this.handleLocationChange}
                name="location"
              >
                {locations.map(el => (
                  <MenuItem key={el.id} value={el.name}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>          
          </div>
        </AppBar>
        <ProductList>
          {products.filter(this.locationFilter).map(product => (
            <ProductItem
              key={product.id}
              product={product}
              cart={cart}
              onAddToCartClicked={() => addToCart(product)}
              onRemoveFromCartClicked={() => removeFromCart(product)}
            />
          ))}
        </ProductList>
      </div>
    );
  }
}

// OrderContainer.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   addToCart: PropTypes.func.isRequired
// };

export default withStyles(styles)(OrderContainer);
