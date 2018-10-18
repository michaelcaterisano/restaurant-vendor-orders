import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; 
import Dashboard from './components/Dashboard';
Amplify.configure(aws_exports);


/*
TODO: 
1) update product model to include Supplier and units
2) create product card component
3) create order model


*/





const App = () => (
  <div>
    <Dashboard />
    {/* <AddProduct /> */}
  </div>

)

export default withAuthenticator(App, { includeGreetings: true });