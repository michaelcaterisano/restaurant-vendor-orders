// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    name
    price
    maxOrder
    defaultOrder
    favorite
    notes
    vendor {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
    }
    category {
      id
      name
    }
    unit {
      id
      name
    }
    location {
      items {
        id
      }
      nextToken
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
    maxOrder
    defaultOrder
    favorite
    notes
    vendor {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
    }
    category {
      id
      name
    }
    unit {
      id
      name
    }
    location {
      items {
        id
      }
      nextToken
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
    maxOrder
    defaultOrder
    favorite
    notes
    vendor {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
    }
    category {
      id
      name
    }
    unit {
      id
      name
    }
    location {
      items {
        id
      }
      nextToken
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
    repName
    repPhone
    repEmail
    minOrder
    orders {
      items {
        id
        name
      }
      nextToken
    }
    products {
      items {
        id
        name
        price
        maxOrder
        defaultOrder
        favorite
        notes
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
    repName
    repPhone
    repEmail
    minOrder
    orders {
      items {
        id
        name
      }
      nextToken
    }
    products {
      items {
        id
        name
        price
        maxOrder
        defaultOrder
        favorite
        notes
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
    repName
    repPhone
    repEmail
    minOrder
    orders {
      items {
        id
        name
      }
      nextToken
    }
    products {
      items {
        id
        name
        price
        maxOrder
        defaultOrder
        favorite
        notes
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
        maxOrder
        defaultOrder
        favorite
        notes
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
        maxOrder
        defaultOrder
        favorite
        notes
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
        maxOrder
        defaultOrder
        favorite
        notes
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
        maxOrder
        defaultOrder
        favorite
        notes
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
        maxOrder
        defaultOrder
        favorite
        notes
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
        maxOrder
        defaultOrder
        favorite
        notes
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
      maxOrder
      defaultOrder
      favorite
      notes
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
      maxOrder
      defaultOrder
      favorite
      notes
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
      maxOrder
      defaultOrder
      favorite
      notes
    }
    order {
      id
      name
    }
  }
}
`;
export const createProductLocation = `mutation CreateProductLocation($input: CreateProductLocationInput!) {
  createProductLocation(input: $input) {
    id
    product {
      id
      name
      price
      maxOrder
      defaultOrder
      favorite
      notes
    }
    location {
      id
      name
    }
  }
}
`;
export const updateProductLocation = `mutation UpdateProductLocation($input: UpdateProductLocationInput!) {
  updateProductLocation(input: $input) {
    id
    product {
      id
      name
      price
      maxOrder
      defaultOrder
      favorite
      notes
    }
    location {
      id
      name
    }
  }
}
`;
export const deleteProductLocation = `mutation DeleteProductLocation($input: DeleteProductLocationInput!) {
  deleteProductLocation(input: $input) {
    id
    product {
      id
      name
      price
      maxOrder
      defaultOrder
      favorite
      notes
    }
    location {
      id
      name
    }
  }
}
`;
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    name
    orders {
      items {
        id
        name
      }
      nextToken
    }
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    name
    orders {
      items {
        id
        name
      }
      nextToken
    }
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    name
    orders {
      items {
        id
        name
      }
      nextToken
    }
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    name
    location {
      id
      name
    }
    vendor {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
    }
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
    location {
      id
      name
    }
    vendor {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
    }
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
    location {
      id
      name
    }
    vendor {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
    }
    products {
      items {
        id
      }
      nextToken
    }
  }
}
`;
