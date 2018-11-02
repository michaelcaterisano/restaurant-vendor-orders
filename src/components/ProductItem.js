import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 200,
    maxWidth: 345,
    margin: 15
  },
  media: {
    height: 100
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

class ProductItem extends Component {
  constructor() {
    super();

    this._incrementQT = this._incrementQT.bind(this);
    this._decrementQT = this._decrementQT.bind(this);
    this._itemQuantity = this._itemQuantity.bind(this);
  }

  _incrementQT() {
    this.props.onAddToCartClicked();
  }

  _decrementQT() {
    this.props.onRemoveFromCartClicked();
  }

  _itemQuantity() {
    const { product, cart } = this.props;
    const item = cart.find(obj => obj.id === product.id);
    if (item) return item.quantity;
  }

  render() {
    const {
      product,
      cart,
      onAddToCartClicked,
      onRemoveFromCartClicked,
      classes,
      locations
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://placekitten.com/200/300"
            title="Contemplative Reptile"
          />
          {/* use material ui grid here */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography component="p">{product.price}</Typography>
            <Typography component="p">{product.vendor.name}</Typography>
            <Typography component="p">{product.category.name}</Typography>
            <Typography component="p">{product.unit.name}</Typography>
            <Typography component="p">{product.maxOrder}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
            onClick={onRemoveFromCartClicked}
            variant="fab"
            mini
            color="secondary"
            aria-label="Remove"
            className={classes.button}
          >
            <RemoveIcon />
          </Button>
          <Typography> {this._itemQuantity() || 0} </Typography>
          <Button
            onClick={onAddToCartClicked}
            variant="fab"
            mini
            color="secondary"
            aria-label="Add"
            className={classes.button}
          >
            <AddIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

// ProductItem.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   }).isRequired,
//   onAddToCartClicked: PropTypes.func.isRequired,
//   onRemoveFromCartClicked: PropTypes.func.isRequired
// };

export default withStyles(styles)(ProductItem);
