import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddLocationForm from '../components/AddLocationForm';

const LocationsContainer = ({ listLocations, locations }) => (
  <React.Fragment>
    <CssBaseline />
    <AddLocationForm locations={locations} onLocationSubmit={listLocations}/>
  </React.Fragment>
);

export default LocationsContainer;