import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddProductForm from "../components/AddProductForm";

const ProductContainer = ({ listProducts, vendors, categories, units, locations }) => (
  <React.Fragment>
    <CssBaseline />
    <AddProductForm
      locations={locations}
      units={units}
      categories={categories}
      vendors={vendors}
      onProductSubmit={listProducts}
    />
  </React.Fragment>
);

export default ProductContainer;
