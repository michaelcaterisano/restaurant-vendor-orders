import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createUnit } from "../graphql/mutations";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
//import CircularProgress from '@material-ui/core/CircularProgress';

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
  unit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10
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
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    if (name === "") return;
    const { onUnitSubmit } = this.props;
    const unit = {
      input: { name }
    };
    await API.graphql(graphqlOperation(createUnit, unit));
    onUnitSubmit();
    this.setState({ name: "" });
  }

  render() {
    const { classes, units } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Unit name"
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
                Add Unit
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {
            <div>
              {units.map(unit => (
                <div key={unit.id} className={classes.unit}>
                  <Typography>{unit.name}</Typography>
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
