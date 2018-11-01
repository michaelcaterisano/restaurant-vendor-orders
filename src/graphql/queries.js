// eslint-disable
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
    nextToken
  }
}
`;
export const getVendor = `query GetVendor($id: ID!) {
  getVendor(id: $id) {
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
export const listVendors = `query ListVendors(
  $filter: ModelVendorFilterInput
  $limit: Int
  $nextToken: String
) {
  listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        maxqty
        defaultqty
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
          maxqty
          defaultqty
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
        maxqty
        defaultqty
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
          maxqty
          defaultqty
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
        maxqty
        defaultqty
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
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
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
