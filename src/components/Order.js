import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API,graphqlOperation} from 'aws-amplify';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductEditor from './ProductEditor';
import ListProducts from './ProductList';
import { listProducts } from '../graphql/queries.js';
import Button from '@material-ui/core/Button';

class Order extends Component {
  state = { 
      products: [],
      order: []
    }

  async componentDidMount() {
    const products = await API.graphql(graphqlOperation(listProducts));
    this.setState({ products: products.data.listProducts.items });
  }

  async listProducts() {
    const products = await API.graphql(graphqlOperation(listProducts));
    this.setState({products: products.data.listProducts.items});
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
          <Button> Order </Button>
          <ListProducts products={products} listProducts={this.listProducts.bind(this)}/>
      </React.Fragment>
    );
  }
}
export default Order;