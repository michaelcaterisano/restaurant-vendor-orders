import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createVendor, deleteVendor } from "../graphql/mutations";

//material-ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    minWidth: 120
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-start"
  },
  vendor: {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    // border: "1px solid red"
  }, 
  loader: {
    margin: 10
  }
});

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      name: "", 
      repName: "", 
      repPhone: "", 
      repEmail: "",
      minOrder: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, repName, repPhone, minOrder } = this.state;
    if (name === "") return;
    const { onVendorSubmit } = this.props;
    const vendor = {
      input: { name, repName, repPhone, minOrder }
    };
    try {
      const result = await API.graphql(graphqlOperation(createVendor, vendor));
      console.log('create vendor success', result)
      onVendorSubmit();
      this.setState({ name: "", repName: "", repPhone: "", minOrder: "" })
    } catch (err) {
      console.log('create vendor error', err)
    }

  }

  render() {
    const { classes, vendors } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="vendor name"
              value={this.state.name}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="repName"
              name="repName"
              label="rep name"
              value={this.state.repName}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="repPhone"
              name="repPhone"
              label="rep phone number"
              placeholder="xxx-xxx-xxxx"
              type="tel"
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              value={this.state.repPhone}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="minOrder"
              name="minOrder"
              label="min order"
              type="number"
              value={this.state.minOrder}
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Add Vendor
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        {
          <div>
            {vendors.map(vendor => (
              <div key={vendor.id} className={classes.vendor}>
                <Typography >{vendor.name}</Typography>
              </div>
            ))}
          </div> 
        }
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Categories);
