/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($owner: String!) {
    onCreateVendor(owner: $owner) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($owner: String!) {
    onUpdateVendor(owner: $owner) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($owner: String!) {
    onDeleteVendor(owner: $owner) {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit($owner: String!) {
    onCreateUnit(owner: $owner) {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit($owner: String!) {
    onUpdateUnit(owner: $owner) {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit($owner: String!) {
    onDeleteUnit(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String!) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String!) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String!) {
    onDeleteCategory(owner: $owner) {
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
export const onCreateProductOrder = /* GraphQL */ `
  subscription OnCreateProductOrder($owner: String!) {
    onCreateProductOrder(owner: $owner) {
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
export const onUpdateProductOrder = /* GraphQL */ `
  subscription OnUpdateProductOrder($owner: String!) {
    onUpdateProductOrder(owner: $owner) {
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
export const onDeleteProductOrder = /* GraphQL */ `
  subscription OnDeleteProductOrder($owner: String!) {
    onDeleteProductOrder(owner: $owner) {
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
export const onCreateProductLocation = /* GraphQL */ `
  subscription OnCreateProductLocation($owner: String!) {
    onCreateProductLocation(owner: $owner) {
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
export const onUpdateProductLocation = /* GraphQL */ `
  subscription OnUpdateProductLocation($owner: String!) {
    onUpdateProductLocation(owner: $owner) {
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
export const onDeleteProductLocation = /* GraphQL */ `
  subscription OnDeleteProductLocation($owner: String!) {
    onDeleteProductLocation(owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($owner: String!) {
    onCreateLocation(owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($owner: String!) {
    onUpdateLocation(owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($owner: String!) {
    onDeleteLocation(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String!) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String!) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String!) {
    onDeleteOrder(owner: $owner) {
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
