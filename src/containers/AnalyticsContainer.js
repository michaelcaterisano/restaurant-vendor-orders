import React from "react";
import PropTypes from "prop-types";
import { API, graphqlOperation } from "aws-amplify";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

export const listOrdersByVendor = `query listVendorOrders($vendorFilter: ModelVendorFilterInput, $dateRange: [String]) {
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
const dateRange = ["2018-11-01T09:47:22.352Z", "2018-11-30T19:47:22.352Z"];

class AnalyticsContainer extends React.Component {
  state = {
    data: null,
    vendor: { name: "" }
  };

  getTotalPrice = data => {
    if (!data) return null;
    return data.data.listVendors.items[0].orders.items
      .map(order => order.products.items.map(item => item.product.price))
      .flat()
      .reduce((a, b) => a + b);
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
    this.setState({ data: result });
  };
  render() {
    const { classes, vendors } = this.props;
    const { data, vendor } = this.state;
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
          <span>Order total: </span>{data ? '$' + this.getTotalPrice(data) : '(select a vendor)'}
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
