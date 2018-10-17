import React, { Component } from 'react';
import {API,graphqlOperation} from 'aws-amplify';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const deleteProduct = `mutation deleteProduct($id: ID!){
    deleteProduct(input:{
      id: $id
    }){
      id
      name
    }
  }`;


class Product extends Component {
    constructor() {
        super()

        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete(e, id, listProducts) {
        e.preventDefault();
        e.stopPropagation();
        const productId = { "id": id };
        await API.graphql(graphqlOperation(deleteProduct, productId));
        listProducts();
    }

    render() {
        const { name, price, id, listProducts} = this.props;
        return (
            <Card>
                <CardHeader title={name} subheader={price}/>
                <IconButton onClick={e => this.handleDelete(e, id, listProducts)}>
                    <DeleteIcon />
                </IconButton>
            </Card>
        )
    }
}

export default Product;
