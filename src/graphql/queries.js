/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
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
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        products {
          nextToken
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
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
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        order {
          id
          createdAt
          name
          updatedAt
          owner
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProductLocation = /* GraphQL */ `
  query GetProductLocation($id: ID!) {
    getProductLocation(id: $id) {
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
export const listProductLocations = /* GraphQL */ `
  query ListProductLocations(
    $filter: ModelProductLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        product {
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
        location {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
