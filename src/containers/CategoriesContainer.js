import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddCategoryForm from '../components/AddCategoryForm';

const CategoriesContainer = ({ listCategories, categories }) => (
  <React.Fragment>
    <CssBaseline />
    <AddCategoryForm categories={categories} onCategorySubmit={listCategories}/>
  </React.Fragment>
);

export default CategoriesContainer;