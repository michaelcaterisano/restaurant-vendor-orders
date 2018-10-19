// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {API,graphqlOperation} from 'aws-amplify';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import ProductEditor from './ProductEditor';
// import { listProducts } from '../graphql/queries.js';

// class AddProduct extends Component {
//   state = { products: [] }

//   async componentDidMount() {
//     const products = await API.graphql(graphqlOperation(listProducts));
//     this.setState({ products: products.data.listProducts.items });
//   }

//   async listProducts() {
//     const products = await API.graphql(graphqlOperation(listProducts));
//     this.setState({products: products.data.listProducts.items});
//   }

//   render() {
//     const { products } = this.state;
//     return (
//       <React.Fragment>
//         <CssBaseline />
//            <ProductEditor listProducts={this.listProducts.bind(this)}/>
//            <ListProducts products={products} listProducts={this.listProducts.bind(this)}/>
//       </React.Fragment>
//     );
//   }
// }
// export default AddProduct;