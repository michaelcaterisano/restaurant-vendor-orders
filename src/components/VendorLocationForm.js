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

  handleLocationChange = event => {
    const { locations, onSelectLocation } = this.props;
    const selectedLocationName = event.target.value;
    const location = locations.find(
      location => location.name === selectedLocationName
    );
    onSelectLocation(location);
  };

  render() {
    const { classes, locations, vendors, selectedLocation } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel>Location</InputLabel>
              <Select
                value={selectedLocation.name}
                onChange={this.handleLocationChange}
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
