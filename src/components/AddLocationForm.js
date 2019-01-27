import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createLocation, deleteLocation } from "../graphql/mutations";

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
  location: {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
  }, 
  loader: {
    margin: 10
  }
});

class AddLocationForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    if (name === "") return;
    const { onLocationSubmit } = this.props;
    const location = {
      input: { name }
    };
    await API.graphql(graphqlOperation(createLocation, location));
    // TODO: Move Location GraphQL query here, don't pass down from Dashboard
    onLocationSubmit();
    this.setState({ name: "" })
  }

  async handleDeleteLocation(id) {
    const { onLocationSubmit } = this.props;
    const location = { input: { id }}
    await API.graphql(graphqlOperation(deleteLocation, location));
    onLocationSubmit();
  }

  render() {
    const { classes, locations } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Location name"
              value={this.state.name}
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
                Add Location
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        {
          <div>
            {locations.map(location => (
              <div key={location.id} className={classes.location}>
                <Typography >{location.name}</Typography>
              </div>
            ))}
          </div> 
        }
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddLocationForm);
