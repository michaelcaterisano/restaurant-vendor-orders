import React, { Component } from 'react';
import {API,graphqlOperation} from 'aws-amplify';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { deleteProduct } from '../graphql/mutations';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  quantityField: {
    width: '50px',
    textAlign: 'center'
  }

});

class Product extends Component {
  constructor() {
    super()

    this.state = {
      quantity: 0
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  async handleDelete(e, id, listProducts) {
    e.preventDefault();
    e.stopPropagation();
    const productId = { "id": id };
    await API.graphql(graphqlOperation(deleteProduct, productId));
    listProducts();
  }

  selectProduct() {
    this.setState({ selected: !this.state.selected })
  }

  incrementQuantity() {
    this.setState({ quantity: this.state.quantity += 1})
  }

  decrementQuantity() {
    if (this.state.quantity <= 0) return;
    this.setState({ quantity: this.state.quantity -= 1})
  }

  render() {
    const { name, price, vendor, id, listProducts, classes } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{price}</Typography>
          <Typography>{vendor}</Typography>
        </CardContent>
        <CardActions>   
          <Button onClick={this.decrementQuantity} variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
            <RemoveIcon />
          </Button>
          <Typography>{this.state.quantity}</Typography> 
          <Button onClick={this.incrementQuantity} variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Button>
          <IconButton onClick={e => this.handleDelete(e, id, listProducts)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Product);
