import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API,graphqlOperation} from 'aws-amplify';
import Product from './Product';
import { deleteProduct } from '../graphql/mutations';

class ListProducts extends Component {
  constructor(props){
    super(props);

    this.state = {
      products:[],
    };
  }

  // async componentDidMount(){
  //   const products = await API.graphql(graphqlOperation(readProduct));
  //   this.setState({ products: products.data.listProducts.items });
  // }

  async handleDelete(id) {
    console.log(id)
    const productId = { "id": id };
    await API.graphql(graphqlOperation(deleteProduct, productId));
  }

  render() {
    const { classes, products, listProducts } = this.props;
    console.log(products)
    const data = [].concat(products)
      .map((item,i)=> 
      <Product 
        id={item.id} 
        key={item.id} 
        name={item.name} 
        price={item.price}
        vendor={item.vendor}
        listProducts={listProducts}
      />
      )
    return (
      <React.Fragment>
        {data}
      </React.Fragment>
    );
  }
}
export default ListProducts;