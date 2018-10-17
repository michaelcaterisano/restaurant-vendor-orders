import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, {API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; 
import AddProduct from './components/AddProduct';
Amplify.configure(aws_exports);


/*
TODO: 
1) update product model to include Supplier and units
2) create product card component
3) create order model


*/


// works with appsync
// const createProduct = `mutation createProduct($name: String!, $price: Int!){
//   createProduct(input:{
//     name: $name
//     price: $price
//   }){
//     id
//     name
//     price
//   }
// }`;


// // works with appsync
// const readProduct = `query listProducts{
//   listProducts{
//     items{
//       id
//       name
//       price
//     }
//   }
// }`;

// // working
// const updateProduct = `mutation updateProduct($id: ID!,$name: String!, $price: Int!){
//   updateProduct(input:{
//     id: $id
//     name: $name
//     price: $price
//   }){
//     id
//     name
//   }
// }`;


// // working
// const deleteProduct = `mutation deleteProduct($id: ID!){
//   deleteProduct(input:{
//     id: $id
//   }){
//     id
//     name
//   }
// }`;


const App = () => (
  <div>
    <AddProduct />
  </div>

)

export default withAuthenticator(App, { includeGreetings: true });