import React from "react";
import PropTypes from "prop-types";
import { API, graphqlOperation } from "aws-amplify";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";

const listOrdersByVendor = `query listVendorOrders($vendorFilter: ModelVendorFilterInput, $dateRange: [String]) {
  listVendors(filter: $vendorFilter){
    items {
      name
      orders(filter: {
        createdAt: {between: $dateRange}
      }) {
        items {
          createdAt
          products {
            items {
              product {
                name
                price
              }
            }
          }
        }
      }
    }
  }
}`;

const listAllOrders = `query listAllOrders($dateRange: [String]) {
  listOrders(filter: {
    createdAt: {between: $dateRange}
  }){
    items {
      products {
        items {
          product {
            name
            price
          }
        }
      }
    }
  }
}`;

const styles = theme => ({
  formControl: {
    margin: 0,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap"
  }
});

const vendorFilter = {
  id: { eq: "abdfc39f-edec-42e2-80ba-62f45a9f7177" }
};
const dateRange = ["2018-11-01T00:00:00.000Z", "2019-02-01T00:00:00.000Z"];

class AnalyticsContainer extends React.Component {
  state = {
    vendorOrders: null,
    vendor: { name: "" },
    orders: null
  };

  componentDidMount() {
    const { resetOrdering } = this.props;
    resetOrdering();
    this.getOrders();
  }

  getVendorTotal = () => {
    const { vendorOrders } = this.state;
    if (!vendorOrders.data.listVendors.items[0].orders.items.length) return "0";
    return vendorOrders.data.listVendors.items[0].orders.items
      .map(order => order.products.items.map(item => item.product.price))
      .flat()
      .reduce((prev, curr) => prev + curr);
  };

  getOrderTotal = () => {
    const { orders } = this.state;
    if (!orders.data.listOrders.items.length) return "0";
    const total = orders.data.listOrders.items
      .map(order => order.products.items.map(item => item.product.price))
      .flat()
      .reduce((prev, curr) => prev + curr);

    return total;
  };

  handleVendorChange = async event => {
    const { vendors } = this.props;
    const selectedVendorName = event.target.value;
    const vendor = vendors.find(vendor => vendor.name === selectedVendorName);
    console.log(vendor);
    this.setState({ vendor }, () => this.getVendorData());
  };

  getVendorData = async () => {
    const { vendor } = this.state;
    const vendorFilter = {
      vendorFilter: {
        id: { eq: vendor.id }
      },
      dateRange: dateRange
    };
    const result = await API.graphql(
      graphqlOperation(listOrdersByVendor, vendorFilter)
    );
    this.setState({ vendorOrders: result });
  };

  getOrders = async () => {
    const filter = {
      dateRange: dateRange
    };
    try {
      const result = await API.graphql(graphqlOperation(listAllOrders, filter));
      this.setState({ orders: result }, () =>
        console.log("get orders success", result)
      );
    } catch (err) {
      console.log("get orders failed", err);
    }
  };

  render() {
    const { classes, vendors } = this.props;
    const { vendorOrders, vendor, orders } = this.state;
    return (
      <Grid container spacing={24}>
        <Grid item xs={6} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="vendor" required>
              Vendor
            </InputLabel>
            <Select
              fullWidth
              value={vendor.name}
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
        <Grid item xs={12}>
          <Typography variant="title">Vendor total </Typography>
          <Typography variant="body2">
            {vendor.name
              ? vendorOrders
                ? "$" + this.getVendorTotal()
                : "$0"
              : "select a vendor"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="title">Order total </Typography>
          <Typography variant="body2">
            {orders ? "$" + this.getOrderTotal() : "$0"}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

// AnalyticsContainer.propTypes = {
//   vendors: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       minOrder: PropTypes.string

//     })
//   ),
// }

export default withStyles(styles)(AnalyticsContainer);
