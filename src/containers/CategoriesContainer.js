import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Categories from '../components/Categories';

const CategoriesContainer = ({ listCategories, categories }) => (
  <React.Fragment>
    <CssBaseline />
    <Categories categories={categories} onCategorySubmit={listCategories}/>
  </React.Fragment>
);

export default CategoriesContainer;