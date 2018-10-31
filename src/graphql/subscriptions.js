// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    name
    price
    units
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
    orders {
      items {
        id
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
    units
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
    orders {
      items {
        id
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
    units
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
    orders {
      items {
        id
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
    products {
      items {
        id
        name
        price
        units
        maxqty
        defaultqty
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
    products {
      items {
        id
        name
        price
        units
        maxqty
        defaultqty
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
    products {
      items {
        id
        name
        price
        units
        maxqty
        defaultqty
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
    products {
      items {
        id
        name
        price
        units
        maxqty
        defaultqty
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
    products {
      items {
        id
        name
        price
        units
        maxqty
        defaultqty
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
    products {
      items {
        id
        name
        price
        units
        maxqty
        defaultqty
      }
      nextToken
    }
  }
}
`;
export const onCreateProductOrder = `subscription OnCreateProductOrder {
  onCreateProductOrder {
    id
    product {
      id
      name
      price
      units
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
export const onUpdateProductOrder = `subscription OnUpdateProductOrder {
  onUpdateProductOrder {
    id
    product {
      id
      name
      price
      units
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
export const onDeleteProductOrder = `subscription OnDeleteProductOrder {
  onDeleteProductOrder {
    id
    product {
      id
      name
      price
      units
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
