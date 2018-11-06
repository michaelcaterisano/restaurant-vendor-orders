// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
      createdAt
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
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
      createdAt
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
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
      createdAt
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
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onCreateVendor = `subscription OnCreateVendor {
  onCreateVendor {
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
export const onUpdateVendor = `subscription OnUpdateVendor {
  onUpdateVendor {
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
export const onDeleteVendor = `subscription OnDeleteVendor {
  onDeleteVendor {
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
export const onCreateUnit = `subscription OnCreateUnit {
  onCreateUnit {
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
export const onUpdateUnit = `subscription OnUpdateUnit {
  onUpdateUnit {
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
export const onDeleteUnit = `subscription OnDeleteUnit {
  onDeleteUnit {
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
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
      }
      nextToken
    }
  }
}
`;
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
      }
      nextToken
    }
  }
}
`;
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
      }
      nextToken
    }
  }
}
`;
export const onCreateProductOrder = `subscription OnCreateProductOrder {
  onCreateProductOrder {
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
    }
    order {
      id
      createdAt
      name
    }
  }
}
`;
export const onUpdateProductOrder = `subscription OnUpdateProductOrder {
  onUpdateProductOrder {
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
    }
    order {
      id
      createdAt
      name
    }
  }
}
`;
export const onDeleteProductOrder = `subscription OnDeleteProductOrder {
  onDeleteProductOrder {
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
    }
    order {
      id
      createdAt
      name
    }
  }
}
`;
export const onCreateProductLocation = `subscription OnCreateProductLocation {
  onCreateProductLocation {
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
export const onUpdateProductLocation = `subscription OnUpdateProductLocation {
  onUpdateProductLocation {
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
export const onDeleteProductLocation = `subscription OnDeleteProductLocation {
  onDeleteProductLocation {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    name
    orders {
      items {
        id
        createdAt
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
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
    id
    name
    orders {
      items {
        id
        createdAt
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
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
    id
    name
    orders {
      items {
        id
        createdAt
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
    id
    createdAt
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
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
    id
    createdAt
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
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
    id
    createdAt
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
        createdAt
      }
      nextToken
    }
  }
}
`;
