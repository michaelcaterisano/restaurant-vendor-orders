import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation } from "aws-amplify";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { createProduct } from "../graphql/mutations";
import NewProductForm from './NewProductForm';


const style = {
  textInput: {
    width: "100px"
  }
};

class ProductEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      price: "",
      vendor: "",
      vendors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.name;
    this.setState({ [value]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const { onProductSubmit } = this.props;
    const { name, price, vendor } = this.state;
    const product = { input: { name: name, price: price, vendor: vendor } };
    await API.graphql(graphqlOperation(createProduct, product));
    onProductSubmit();
    this.setState({ name: "", price: "", vendor: "" });
  }

  render() {
    const vendors = ["a", "b", "c"];
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <NewProductForm />
        {/* <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              name="name"
              placeholder="name"
              aria-label="Product"
              aria-describedby="basic-addon2"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              name="price"
              placeholder="price"
              aria-label="Product"
              aria-describedby="basic-addon2"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <TextField
              select
              className={classes.textInput}
              name={"vendor"}
              label="Select"
              value={this.state.vendor}
              onChange={e => this.handleChange(e)}
            >
              {vendors.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Add Product
              </button>
            </div>
          </div>
        </form> */}
      </React.Fragment>
    );
  }
}
export default withStyles(style)(ProductEditor);
