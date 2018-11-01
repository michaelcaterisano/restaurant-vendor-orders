// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    name
    price
    maxqty
    defaultqty
    vendor {
      id
      name
    }
    category {
      id
      name
    }
    unit {
      id
      name
    }
    orders {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    name
    price
    maxqty
    defaultqty
    vendor {
      id
      name
    }
    category {
      id
      name
    }
    unit {
      id
      name
    }
    orders {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    name
    price
    maxqty
    defaultqty
    vendor {
      id
      name
    }
    category {
      id
      name
    }
    unit {
      id
      name
    }
    orders {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createVendor = `mutation CreateVendor($input: CreateVendorInput!) {
  createVendor(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const updateVendor = `mutation UpdateVendor($input: UpdateVendorInput!) {
  updateVendor(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const deleteVendor = `mutation DeleteVendor($input: DeleteVendorInput!) {
  deleteVendor(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const createUnit = `mutation CreateUnit($input: CreateUnitInput!) {
  createUnit(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const updateUnit = `mutation UpdateUnit($input: UpdateUnitInput!) {
  updateUnit(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const deleteUnit = `mutation DeleteUnit($input: DeleteUnitInput!) {
  deleteUnit(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    name
    products {
      items {
        id
        name
        price
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const createProductOrder = `mutation CreateProductOrder($input: CreateProductOrderInput!) {
  createProductOrder(input: $input) {
    id
    product {
      id
      name
      price
      maxqty
      defaultqty
    }
    order {
      id
      name
    }
  }
}
`;
export const updateProductOrder = `mutation UpdateProductOrder($input: UpdateProductOrderInput!) {
  updateProductOrder(input: $input) {
    id
    product {
      id
      name
      price
      maxqty
      defaultqty
    }
    order {
      id
      name
    }
  }
}
`;
export const deleteProductOrder = `mutation DeleteProductOrder($input: DeleteProductOrderInput!) {
  deleteProductOrder(input: $input) {
    id
    product {
      id
      name
      price
      maxqty
      defaultqty
    }
    order {
      id
      name
    }
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    name
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    name
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    name
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
