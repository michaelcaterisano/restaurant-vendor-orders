import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateProduct } from "../graphql/mutations";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classNames from "classnames";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  card: {
    margin: "10px 10px 10px 10px",
    width: 300
  },
  actions: {
    display: "flex"
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

class ProductItem extends React.Component {
  state = {
    favorite: false,
    anchorEl: null
  };

  componentDidMount() {
    const { product } = this.props;
    const favorite = product.favorite === null ? false : product.favorite;
    this.setState({ favorite });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
  };

  toggleFavorite = async () => {
    const { listProducts, product } = this.props;
    const { favorite } = this.state;

    try {
      const response = await API.graphql(
        graphqlOperation(updateProduct, {
          input: { id: product.id, favorite: !favorite }
        })
      );
      console.log("toggle favorite success", response);
      this.setState({ favorite: !favorite });
      listProducts();
    } catch (err) {
      console.log("toggle favorite error", err);
    }
  };

  render() {
    const { classes, product } = this.props;
    const { anchorEl } = this.state;
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
            <div>
              <IconButton onClick={this.handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Edit Product</MenuItem>
                <MenuItem onClick={this.handleClose}>Delete Product</MenuItem>
                <MenuItem onClick={this.handleClose}>Other stuff</MenuItem>
              </Menu>
            </div>
          }
          title={product.name}
          subheader={product.category.name}
        />
        <CardContent className={classes.content}>
          <div>
            <Typography variant="body2">
              Price
              <Typography variant="caption" gutterBottom>
                ${product.price}
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
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            aria-label="Add to favorites"
            color={this.state.favorite ? "secondary" : "primary"}
            onClick={this.toggleFavorite}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProductItem);
