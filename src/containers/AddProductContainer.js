import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation } from "aws-amplify";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProductEditor from "../components/ProductEditor";
import NewProductForm from '../components/NewProductForm';
import { listProducts } from "../graphql/queries.js";

const AddProduct = ({ listProducts }) => (
  <React.Fragment>
    <CssBaseline />
    <NewProductForm onProductSubmit={listProducts} />
  </React.Fragment>
);

export default AddProduct;
