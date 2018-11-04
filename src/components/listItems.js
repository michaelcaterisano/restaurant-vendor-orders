import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
     <Link to="/settings">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
    {/* <Link to="/categories">
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
    </Link> */}
    
    {/* <Link to="/edit-vendor">
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Vendors" />
      </ListItem>
    </Link> */}

    <Link to="/add-product">
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Add product" />
      </ListItem>
    </Link>

    <Link to="/product-list">
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Product List" />
      </ListItem>
    </Link>

    <Link to="/order">
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Order Products" />
      </ListItem>
    </Link>

    {/* <Link to="/cart">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>
    </Link> */}

    {/* <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
