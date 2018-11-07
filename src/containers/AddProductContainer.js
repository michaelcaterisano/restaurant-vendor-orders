import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddProductForm from "../components/AddProductForm";

class AddProductContainer extends React.Component {
  componentDidMount() {
    const { resetOrdering } = this.props;
    resetOrdering();
  }

  render() {
    const { listProducts, vendors, categories, units, locations } = this.props;
    return (
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
  }
}
export default AddProductContainer;
