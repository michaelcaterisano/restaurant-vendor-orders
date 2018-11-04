// eslint-disable
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
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
export const listProducts = `query ListProducts(
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
          location {
            name
          }
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
    nextToken
  }
}
`;
export const getVendor = `query GetVendor($id: ID!) {
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
export const listVendors = `query ListVendors(
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
    nextToken
  }
}
`;
export const getUnit = `query GetUnit($id: ID!) {
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
      }
      nextToken
    }
  }
}
`;
export const listUnits = `query ListUnits(
  $filter: ModelUnitFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getProductOrder = `query GetProductOrder($id: ID!) {
  getProductOrder(id: $id) {
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
export const listProductOrders = `query ListProductOrders(
  $filter: ModelProductOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      order {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getProductLocation = `query GetProductLocation($id: ID!) {
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
    }
    location {
      id
      name
    }
  }
}
`;
export const listProductLocations = `query ListProductLocations(
  $filter: ModelProductLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      location {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
