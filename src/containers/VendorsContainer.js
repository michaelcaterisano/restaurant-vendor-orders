import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddVendorForm from '../components/AddVendorForm';

const EditVendorsContainer = ({ listVendors, vendors }) => (
  <React.Fragment>
    <CssBaseline />
    <AddVendorForm vendors={vendors} onVendorSubmit={listVendors}/>
  </React.Fragment>
);

export default EditVendorsContainer;