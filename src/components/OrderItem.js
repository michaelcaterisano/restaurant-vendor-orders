import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateProduct } from "../graphql/mutations";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import classNames from "classnames";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = {
  card: {
    margin: "10px 10px 10px 10px",
    width: 300
  },
  actions: {
    display: "flex",
    justifyContent: "space-around"
  },
  media: {
    height: 151
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  content: {
    display: "flex",
    maxHeight: 250,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
};

class OrderItem extends React.Component {
  constructor() {
    super();

    this.state = {
      favorite: false
    };

    this._itemQuantity = this._itemQuantity.bind(this);
  }

  _itemQuantity() {
    const { product, cart } = this.props;
    const item = cart.find(obj => obj.id === product.id);
    if (item) return item.quantity;
  }

  componentDidMount() {
    const { product } = this.props;
    const favorite = product.favorite === null ? false : product.favorite;
    this.setState({ favorite });
  }

  toggleFavorite = async () => {
    const { listProducts, product } = this.props;
    const { favorite } = this.state;

    try {
      const response = await API.graphql(
        graphqlOperation(updateProduct, {
          input: { id: product.id, favorite: !favorite }
        })
      );
      console.log("favorite item success", response);
      this.setState({ favorite: !favorite });
      listProducts();
    } catch (err) {
      console.log("favorite item error", err);
    }
  };

  render() {
    const { classes, product, addToCart, removeFromCart } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              src="https://placekitten.com/200/200"
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
          }
          action={
            <IconButton
              aria-label="Add to favorites"
              color={this.state.favorite ? "secondary" : "primary"}
              onClick={this.toggleFavorite}
            >
              <FavoriteIcon />
            </IconButton>
          }
          title={product.name}
          subheader={product.category.name}
        />
        <CardContent className={classes.content}>
          <div>
            <Typography variant="body2">
              Price
              <Typography variant="caption" gutterBottom>
                {product.price}
              </Typography>
            </Typography>

            <Typography variant="body2">
              Unit
              <Typography variant="caption" gutterBottom>
                {product.unit.name}
              </Typography>
            </Typography>
            {product.vendor ? (
              <Typography variant="body2">
                Vendor
                <Typography variant="caption" gutterBottom>
                  {product.vendor.name}
                </Typography>
              </Typography>
            ) : null}
            {product.location.items.length ? (
              <div>
                <Typography variant="body2">Location(s):</Typography>
                <div>
                  {product.location.items.map(el => (
                    <Typography variant="caption" key={el.location.name}>
                      {el.location.name}
                    </Typography>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div>
            {product.maxOrder ? (
              <Typography variant="body2">
                Max Order:{" "}
                <Typography variant="caption" gutterBottom>
                  {product.maxOrder}
                </Typography>
              </Typography>
            ) : null}
            {product.defaultOrder ? (
              <Typography variant="body2">
                Default Order:{" "}
                <Typography variant="caption" gutterBottom>
                  {product.defaultOrder}
                </Typography>
              </Typography>
            ) : null}
            {product.notes ? (
              <Typography variant="body2">
                Notes:{" "}
                <Typography variant="caption" gutterBottom>
                  {product.notes}
                </Typography>
              </Typography>
            ) : null}
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            onClick={removeFromCart}
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
            onClick={addToCart}
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

// OrderItem.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   }).isRequired,
//   onAddToCartClicked: PropTypes.func.isRequired,
//   onRemoveFromCartClicked: PropTypes.func.isRequired
// };

export default withStyles(styles)(OrderItem);
