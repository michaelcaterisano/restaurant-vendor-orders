import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; 
import Dashboard from './containers/Dashboard';
import customAuthTheme from './customAuthTheme';

/* eslint-disable */
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
// import LuxonUtils from '@date-io/luxon';
Amplify.configure(aws_exports);


/*
TODO: 
1) update product model to include Supplier and units
2) create product card component
3) create order model


*/





const App = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Dashboard />
  </MuiPickersUtilsProvider>

)

export default withAuthenticator(App, true, [], null, customAuthTheme);