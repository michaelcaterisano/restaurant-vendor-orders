// figure out how to write input here
export const listOrdersByVendor = `query listVendors($filter: ) {
  listVendors(filter: {id: {eq: "53b1be0a-b3f2-4e9b-802a-c8dc93432b50"}}) {
    items {
      name
      orders {
        items {
          id
          name
          location {
            id
          }
          products {
            items {
              product {
                name
              }
            }
          } 
        }
      }
    }
  }
}`