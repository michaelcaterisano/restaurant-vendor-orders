import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CategoriesContainer from "./CategoriesContainer";
import VendorsContainer from "./VendorsContainer";
import UnitsContainer from "./UnitsContainer";
import LocationsContainer from "./LocationsContainer";

function TabContainer(props) {
  return (
    <div style={{ padding: 8 * 3 }}>
      <Typography component="div">{props.children}</Typography>
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      categories,
      listCategories,
      vendors,
      listVendors,
      units,
      listUnits,
      locations,
      listLocations
    } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons={"off"}
          >
            <Tab label="Categories" />
            <Tab label="Vendors" />
            <Tab label="Units" />
            <Tab label="Delivery Locations" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <CategoriesContainer
              categories={categories}
              listCategories={listCategories}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <VendorsContainer vendors={vendors} listVendors={listVendors} />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <UnitsContainer units={units} listUnits={listUnits} />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <LocationsContainer locations={locations} listLocations={listLocations} />
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
