import React from "react";
import PropTypes from "prop-types";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts, listVendors} from "../graphql/queries";
import { createVendor} from "../graphql/mutations";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { mainListItems, secondaryListItems } from "../components/listItems";
import AddProductContainer from "./AddProductContainer";
import EditVendorsContainer from "./EditVendorsContainer";
import OrderContainer from "./OrderContainer";
import CartContainer from "./CartContainer";
import { countCartItems } from "../lib/helpers";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    position: "absolute",
    top: "auto",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  state = {
    products: [],
    vendors: [],
    cart: [],
    open: true
  };

  async componentDidMount() {
    const products = await API.graphql(graphqlOperation(listProducts));
    const vendors = await API.graphql(graphqlOperation(listVendors));
    this.setState({ 
      products: products.data.listProducts.items,
      vendors: vendors.data.listVendors.items    
    });
  }

  async listProducts() {
    const products = await API.graphql(graphqlOperation(listProducts));
    this.setState({ products: products.data.listProducts.items });
  }

  async listVendors() {
    const vendors = await API.graphql(graphqlOperation(listVendors));
    this.setState({ vendors: vendors.data.listVendors.items})
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addToCart(product) {
    this.setState({ cart: [...this.state.cart, product] });
  };

  removeFromCart = product => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart.splice(index, 1);
      this.setState({ cart });
    }
  };

  checkout() {
    alert("checkout");
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar
              className={classNames(
                classes.appBar,
                this.state.open && classes.appBarShift
              )}
            >
              <Toolbar
                disableGutters={!this.state.open}
                className={classes.toolbar}
              >
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Dashboard
                </Typography>
                <IconButton color="inherit">
                  <Badge
                    badgeContent={this.state.cart.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose
                )
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{mainListItems}</List>
              {/* <Divider />
              <List>{secondaryListItems}</List> */}
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <div className={classes.tableContainer}>
                <Route
                  path="/edit-vendor"
                  render={() => (
                    <EditVendorsContainer
                      vendors={this.state.vendors}
                      listVendors={this.listVendors.bind(this)}
                    />
                  )}
                />
                <Route
                  path="/add-product"
                  render={() => (
                    <AddProductContainer
                      vendors={this.state.vendors}
                      listProducts={this.listProducts.bind(this)}
                    />
                  )}
                />
                <Route
                  path="/order"
                  render={() => (
                    <OrderContainer
                      products={this.state.products}
                      cart={countCartItems(this.state.cart)}
                      addToCart={this.addToCart.bind(this)}
                      removeFromCart={this.removeFromCart.bind(this)}
                    />
                  )}
                />
                <Route
                  path="/cart"
                  render={() => (
                    <CartContainer
                      products={countCartItems(this.state.cart)}
                      total={20}
                      checkout={this.checkout.bind(this)}
                    />
                  )}
                />
              </div>
            </main>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
