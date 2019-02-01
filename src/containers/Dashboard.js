import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  listVendors,
  listCategorys,
  listUnits,
  listLocations
} from "../graphql/queries";
import { customListProducts } from "../lib/custom-graphql/queries";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { mainListItems } from "../components/listItems";
import AddProductContainer from "./AddProductContainer";
import ProductListContainer from "./ProductListContainer";
import SettingsContainer from "./SettingsContainer";
import OrderContainer from "./OrderContainer";
import AnalyticsContainer from "./AnalyticsContainer";
import Home from "../components/Home";

const drawerWidth = 200;

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
  settings: {
    width: "100vw",
    position: "absolute",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
    height: "100vh",
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
    // hack!
    margin: "0 0 0 -1px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: 0
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: "auto"
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  state = {
    products: [], // possible this can live in child components?
    vendors: [], // also query from child components?
    categories: [], // query from child components
    units: [],
    locations: [],
    cart: [],
    orderTotal: 0,
    open: false,
    ordering: false
  };

  async componentDidMount() {
    const products = await API.graphql(
      graphqlOperation(customListProducts, { limit: 100 })
    );
    const vendors = await API.graphql(
      graphqlOperation(listVendors, { limit: 100 })
    );
    const categories = await API.graphql(
      graphqlOperation(listCategorys, { limit: 100 })
    );
    const units = await API.graphql(
      graphqlOperation(listUnits, { limit: 100 })
    );

    const locations = await API.graphql(
      graphqlOperation(listLocations, { limit: 100 })
    );

    this.setState({
      products: products.data.listProducts.items,
      vendors: vendors.data.listVendors.items,
      categories: categories.data.listCategorys.items,
      units: units.data.listUnits.items,
      locations: locations.data.listLocations.items
    });
  }

  listProducts = async () => {
    const products = await API.graphql(
      graphqlOperation(customListProducts, { limit: 100 })
    );
    this.setState({ products: products.data.listProducts.items });
  };

  listVendors = async () => {
    const vendors = await API.graphql(
      graphqlOperation(listVendors, { limit: 100 })
    );
    this.setState({ vendors: vendors.data.listVendors.items });
  };

  listCategories = async () => {
    const categories = await API.graphql(
      graphqlOperation(listCategorys, { limit: 100 })
    );
    this.setState({ categories: categories.data.listCategorys.items });
  };

  listUnits = async () => {
    const units = await API.graphql(
      graphqlOperation(listUnits, { limit: 100 })
    );
    this.setState({ units: units.data.listUnits.items });
  };

  listLocations = async () => {
    const locations = await API.graphql(
      graphqlOperation(listLocations, { limit: 100 })
    );
    this.setState({ locations: locations.data.listLocations.items });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleOrdering = () => {
    this.setState({ ordering: !this.state.ordering });
  };

  resetOrdering = () => {
    this.setState({ cart: [], orderTotal: 0, ordering: false });
  };

  emptyCart = () => {
    this.setState({ cart: [] }, () => this.getOrderTotal());
  };

  getOrderTotal = () => {
    const { cart } = this.state;
    const orderTotal = cart.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
    this.setState({ orderTotal });
  };

  addToCart = product => {
    this.setState({ cart: [...this.state.cart, product] }, () =>
      this.getOrderTotal()
    );
  };

  removeFromCart = product => {
    const cart = [...this.state.cart];
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart.splice(index, 1);
      this.setState({ cart }, () => this.getOrderTotal());
    }
  };

  render() {
    const { classes } = this.props;
    const {
      products,
      vendors,
      categories,
      units,
      locations,
      cart,
      orderTotal,
      ordering
    } = this.state;
    return (
      <Router>
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
                <Badge badgeContent={this.state.cart.length} color="secondary">
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
            <List onClick={this.handleDrawerClose}>{mainListItems}</List>
          </Drawer>

          <main
            className={classNames(
              classes.settings,
              this.state.open && classes.appBarShift
            )}
          >
            <div className={classes.appBarSpacer} />
            <Route exact path="/" component={Home} />
            <Route
              path="/settings"
              render={() => (
                <SettingsContainer
                  vendors={vendors}
                  listVendors={this.listVendors}
                  categories={categories}
                  listCategories={this.listCategories}
                  units={units}
                  listUnits={this.listUnits}
                  locations={locations}
                  listLocations={this.listLocations}
                  resetOrdering={this.resetOrdering}
                />
              )}
            />
            <Route
              path="/add-product"
              render={() => (
                <div style={{ padding: 8 * 3 }}>
                  <AddProductContainer
                    vendors={vendors}
                    categories={categories}
                    units={units}
                    locations={locations}
                    listProducts={this.listProducts}
                    resetOrdering={this.resetOrdering}
                  />
                </div>
              )}
            />
            <Route
              path="/product-list"
              render={() => (
                <ProductListContainer
                  products={products}
                  locations={locations}
                  vendors={vendors}
                  categories={categories}
                  units={units}
                  listProducts={this.listProducts}
                  resetOrdering={this.resetOrdering}
                />
              )}
            />
            <Route
              path="/order"
              render={() => (
                <OrderContainer
                  products={products}
                  locations={locations}
                  vendors={vendors}
                  categories={categories}
                  units={units}
                  cart={cart}
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                  listProducts={this.listProducts}
                  orderTotal={orderTotal}
                  ordering={ordering}
                  toggleOrdering={this.toggleOrdering}
                  resetOrdering={this.resetOrdering}
                  emptyCart={this.emptyCart}
                />
              )}
            />
            <Route
              path="/analytics"
              render={() => (
                <AnalyticsContainer
                  vendors={vendors}
                  resetOrdering={this.resetOrdering}
                />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Dashboard);
