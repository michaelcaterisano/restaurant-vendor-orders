// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    name
    price
    vendor
    category
    units
    defaultqty
    maxqty
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    name
    price
    vendor
    category
    units
    defaultqty
    maxqty
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    name
    price
    vendor
    category
    units
    defaultqty
    maxqty
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    name
    products {
      id
      name
      price
      vendor
      category
      units
      defaultqty
      maxqty
    }
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    name
    products {
      id
      name
      price
      vendor
      category
      units
      defaultqty
      maxqty
    }
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    name
    products {
      id
      name
      price
      vendor
      category
      units
      defaultqty
      maxqty
    }
  }
}
`;
