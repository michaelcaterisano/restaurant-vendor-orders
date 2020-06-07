/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        createdAt
        products {
          nextToken
        }
        updatedAt
        owner
      }
      unit {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      location {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      orders {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        createdAt
        products {
          nextToken
        }
        updatedAt
        owner
      }
      unit {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      location {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      orders {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category {
        id
        name
        createdAt
        products {
          nextToken
        }
        updatedAt
        owner
      }
      unit {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      location {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      orders {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
      orders {
        items {
          id
          createdAt
          name
          updatedAt
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
      orders {
        items {
          id
          createdAt
          name
          updatedAt
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
      id
      name
      repName
      repPhone
      repEmail
      minOrder
      orders {
        items {
          id
          createdAt
          name
          updatedAt
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      products {
        items {
          id
          name
          price
          maxOrder
          defaultOrder
          favorite
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      products {
        items {
          id
          name
          price
          maxOrder
          defaultOrder
          favorite
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      products {
        items {
          id
          name
          price
          maxOrder
          defaultOrder
          favorite
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const createProductOrder = /* GraphQL */ `
  mutation CreateProductOrder(
    $input: CreateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    createProductOrder(input: $input, condition: $condition) {
      id
      createdAt
      product {
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
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        unit {
          id
          name
          createdAt
          updatedAt
          owner
        }
        location {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      order {
        id
        createdAt
        name
        location {
          id
          name
          createdAt
          updatedAt
          owner
        }
        vendor {
          id
          name
          repName
          repPhone
          repEmail
          minOrder
          createdAt
          updatedAt
          owner
        }
        products {
          nextToken
        }
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const updateProductOrder = /* GraphQL */ `
  mutation UpdateProductOrder(
    $input: UpdateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    updateProductOrder(input: $input, condition: $condition) {
      id
      createdAt
      product {
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
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        unit {
          id
          name
          createdAt
          updatedAt
          owner
        }
        location {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      order {
        id
        createdAt
        name
        location {
          id
          name
          createdAt
          updatedAt
          owner
        }
        vendor {
          id
          name
          repName
          repPhone
          repEmail
          minOrder
          createdAt
          updatedAt
          owner
        }
        products {
          nextToken
        }
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const deleteProductOrder = /* GraphQL */ `
  mutation DeleteProductOrder(
    $input: DeleteProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    deleteProductOrder(input: $input, condition: $condition) {
      id
      createdAt
      product {
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
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        unit {
          id
          name
          createdAt
          updatedAt
          owner
        }
        location {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      order {
        id
        createdAt
        name
        location {
          id
          name
          createdAt
          updatedAt
          owner
        }
        vendor {
          id
          name
          repName
          repPhone
          repEmail
          minOrder
          createdAt
          updatedAt
          owner
        }
        products {
          nextToken
        }
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const createProductLocation = /* GraphQL */ `
  mutation CreateProductLocation(
    $input: CreateProductLocationInput!
    $condition: ModelProductLocationConditionInput
  ) {
    createProductLocation(input: $input, condition: $condition) {
      id
      product {
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
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        unit {
          id
          name
          createdAt
          updatedAt
          owner
        }
        location {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      location {
        id
        name
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProductLocation = /* GraphQL */ `
  mutation UpdateProductLocation(
    $input: UpdateProductLocationInput!
    $condition: ModelProductLocationConditionInput
  ) {
    updateProductLocation(input: $input, condition: $condition) {
      id
      product {
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
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        unit {
          id
          name
          createdAt
          updatedAt
          owner
        }
        location {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      location {
        id
        name
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProductLocation = /* GraphQL */ `
  mutation DeleteProductLocation(
    $input: DeleteProductLocationInput!
    $condition: ModelProductLocationConditionInput
  ) {
    deleteProductLocation(input: $input, condition: $condition) {
      id
      product {
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
          createdAt
          updatedAt
          owner
        }
        category {
          id
          name
          createdAt
          updatedAt
          owner
        }
        unit {
          id
          name
          createdAt
          updatedAt
          owner
        }
        location {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      location {
        id
        name
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      orders {
        items {
          id
          createdAt
          name
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      orders {
        items {
          id
          createdAt
          name
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      orders {
        items {
          id
          createdAt
          name
          updatedAt
          owner
        }
        nextToken
      }
      products {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      createdAt
      name
      location {
        id
        name
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      vendor {
        id
        name
        repName
        repPhone
        repEmail
        minOrder
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      products {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      createdAt
      name
      location {
        id
        name
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      vendor {
        id
        name
        repName
        repPhone
        repEmail
        minOrder
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      products {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      createdAt
      name
      location {
        id
        name
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      vendor {
        id
        name
        repName
        repPhone
        repEmail
        minOrder
        orders {
          nextToken
        }
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      products {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
