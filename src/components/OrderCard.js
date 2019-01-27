import React from "react";
import pluralize from "pluralize";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    margin: "10px 10px 10px 10px",
    width: 300
  },
  products: {
    marginBottom: "10px"
  },
  greeting: {
    marginBottom: "10px"
  }
};

const OrderCard = ({ order, selectedLocation, classes }) => {
  const vendor = order[0].vendor;
  const products = order.map(product => {
    const { quantity, name } = product;
    const unit = pluralize(product.unit.name, quantity);
    return (
      <div>
        {quantity} {unit} {name}
      </div>
    );
  });
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {vendor.name} order
        </Typography>
        <div style={styles.greeting}>
          Hi {vendor.repName}! Order for Tampopo {selectedLocation.name}.
        </div>
        <div style={styles.products}>{products}</div>
        <div>Thanks!</div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(OrderCard);
