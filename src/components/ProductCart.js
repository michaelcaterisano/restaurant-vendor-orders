import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from "@material-ui/core/TextField";
import pluralize from 'pluralize';
import { withStyles } from "@material-ui/core/styles";

const ProductCart = ({ name, price, quantity, units }) => {
  console.log(quantity)
  const pluralizedQuantity = pluralize(units, quantity)
  return (
  <div>
    <div>{name}, {quantity} {pluralizedQuantity} </div>
  </div>
  // <CardActions>
  //       <Button onClick={this.decrementQuantity} variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
  //         <RemoveIcon />
  //       </Button>
  //       <Typography>{this.state.quantity}</Typography>
  //       <Button onClick={this.incrementQuantity} variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
  //         <AddIcon />
  //       </Button>
  //       <IconButton onClick={e => this.handleDelete(e, id, listProducts)}>
  //         <DeleteIcon />
  //       </IconButton>
  //     </CardActions>
)};

export default ProductCart;
