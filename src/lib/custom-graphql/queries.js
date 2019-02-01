export const customListProducts = `query ListProducts(
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
            id
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

export const listOrdersByVendor = `query listVendorOrders($vendorFilter: ModelVendorFilterInput, $dateRange: [String]) {
  listVendors(filter: $vendorFilter, limit: 1000){
    items {
      name
      orders(filter: {
        createdAt: {between: $dateRange}
      }) {
        items {
          createdAt
          products {
            items {
              product {
                name
                price
              }
            }
          }
        }
      }
    }
  }
}`;

// figure out better soltuion for limit: 1000
export const listAllOrders = `query listAllOrders($dateRange: [String]) {
  listOrders(filter: {
    createdAt: {between: $dateRange}
  }, limit: 1000){
    items {
      products {
        items {
          product {
            name
            price
          }
        }
      }
    }
  }
}`;
