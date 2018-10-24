import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

const ProductsList = ({ children, classes }) => (
  <div className={classes.list}>
    {children}
  </div>
);

// ProductsList.propTypes = {
//   children: PropTypes.node
// };

export default withStyles(styles)(ProductsList);
