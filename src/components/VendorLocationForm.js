import React from "react";
import Grid from "@material-ui/core/Grid";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    margin: 0,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap"
  }
});

class VendorLocationform extends React.Component {
  handleChange = event => {
    const { onSelect } = this.props;
    onSelect(event);
  };

  render() {
    const { classes, locations, vendors, selectedVendor, selectedLocation } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Vendor</InputLabel>
              <Select value={selectedVendor} onChange={this.handleChange} name="selectedVendor">
                {vendors.map(vendor => (
                  <MenuItem key={vendor.id} value={vendor.name}>
                    {vendor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Location</InputLabel>
              <Select
                value={selectedLocation}
                onChange={this.handleChange}
                name="selectedLocation"
              >
                {locations.map(location => (
                  <MenuItem key={location.id} value={location.name}>
                    {location.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(VendorLocationform);
