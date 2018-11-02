import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Categories from '../components/Categories';
import AddUnitForm from '../components/AddUnitForm';

const UnitsContainer = ({ listUnits, units }) => (
  <React.Fragment>
    <CssBaseline />
    <AddUnitForm units={units} onUnitSubmit={listUnits}/>
  </React.Fragment>
);

export default UnitsContainer;