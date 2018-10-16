import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, {API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);


// works with appsync
const createProduct = `mutation createProduct($name: String!, $price: Int!){
  createProduct(input:{
    name: $name
    price: $price
  }){
    id
    name
    price
  }
}`;


// works with appsync
const readProduct = `query listProducts{
  listProducts{
    items{
      id
      name
      price
    }
  }
}`;

// working
const updateProduct = `mutation updateProduct($id: ID!,$name: String!, $price: Int!){
  updateProduct(input:{
    id: $id
    name: $name
    price: $price
  }){
    id
    name
  }
}`;


// working
const deleteProduct = `mutation deleteProduct($id: ID!){
  deleteProduct(input:{
    id: $id
  }){
    id
    name
  }
}`;


// 
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      id:"",
      products:[],
      name:"",
      price: "",
      displayAdd:true,
      displayUpdate:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // get initial data
  async componentDidMount(){
    const products = await API.graphql(graphqlOperation(readProduct));
    this.setState({ products: products.data.listProducts.items });
  }

  // works
  handleChange(event) {
    let value = event.target.name
    console.log(event.target.value)
    this.setState({ [value]: event.target.value } );
  }

  // works
  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const { name, price } = this.state;
    const product = { name: name, price: price }
    await API.graphql(graphqlOperation(createProduct, product));
    this.listProducts();
    this.setState({value:""});
  }

  // works
  async handleDelete(id) {
    console.log(id)
    const productId = { "id": id };
    await API.graphql(graphqlOperation(deleteProduct, productId));
    this.listProducts();
  }

  
  async handleUpdate(event) {
    event.preventDefault();
    event.stopPropagation();
    const product = { "id": this.state.id, "name": this.state.name, "price": this.state.price };
    await API.graphql(graphqlOperation(updateProduct, product));
    this.listProducts();
    this.setState({ displayAdd:true, displayUpdate: false, value: "" });
  }

  selectProduct(product){
    this.setState({id:product.id, value: product.product, displayAdd:false,displayUpdate:true});
  }

  async listProducts(){
    const products = await API.graphql(graphqlOperation(readProduct));
    console.log(products)
    this.setState({products: products.data.listProducts.items});
  }
  
  logItem(item) {
    console.log(item)
  }

  render() {
    console.log(this.state.products)
    const data = [].concat(this.state.products)
      .map((item,i)=> 
      <div className="alert alert-primary alert-dismissible show" role="alert">
        <span key={item.i} onClick={this.selectProduct.bind(this, item)}>{item.name}: {item.price} </span>
        <button key={item.i} type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleDelete.bind(this, item.id)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      )
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Products App</h1>
        </header> */}
        <br/>
        <div className="container">
          {this.state.displayAdd ?
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg" name="name" placeholder="name" aria-label="Product" aria-describedby="basic-addon2" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" className="form-control form-control-lg" name="price" placeholder="price" aria-label="Product" aria-describedby="basic-addon2" value={this.state.price} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Add Product</button>
                </div>
              </div>
            </form>
          : null }
          {this.state.displayUpdate ?
            <form onSubmit={this.handleUpdate}>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg" name="name" placeholder="update name" aria-label="Product" aria-describedby="basic-addon2" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" className="form-control form-control-lg" name="price" placeholder="update price" aria-label="Product" aria-describedby="basic-addon2" value={this.state.price} onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Update Product</button>
                </div>
              </div>
            </form>
          : null }
        </div>
        <br/>
        <div className="container">
          {data}
        </div>
      </div>
    );
  }
}
export default withAuthenticator(App, { includeGreetings: true });