import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Discovery } from "aws-sdk/clients/all";
import { classExpression } from "babel-types";

const styles = {
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }
};

const ProductsList = ({ classes, children }) => (
  <div className={classes.list}>
    {children}
  </div>
);

// ProductsList.propTypes = {
//   children: PropTypes.node
// };

export default withStyles(styles)(ProductsList);
