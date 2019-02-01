import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
};

const ProductsList = ({ classes, children }) => (
  <div className={classes.list}>{children}</div>
);

export default withStyles(styles)(ProductsList);
