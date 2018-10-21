// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    name
    price
    vendor
    category
    units
    defaultqty
    maxqty
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
    id
    name
    price
    vendor
    category
    units
    defaultqty
    maxqty
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
    id
    name
    price
    vendor
    category
    units
    defaultqty
    maxqty
  }
}
`;
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
    id
    name
    products {
      id
      name
      price
      vendor
      category
      units
      defaultqty
      maxqty
    }
  }
}
`;
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
    id
    name
    products {
      id
      name
      price
      vendor
      category
      units
      defaultqty
      maxqty
    }
  }
}
`;
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
    id
    name
    products {
      id
      name
      price
      vendor
      category
      units
      defaultqty
      maxqty
    }
  }
}
`;
export const onCreateVendor = `subscription OnCreateVendor {
  onCreateVendor {
    id
    name
  }
}
`;
export const onUpdateVendor = `subscription OnUpdateVendor {
  onUpdateVendor {
    id
    name
  }
}
`;
export const onDeleteVendor = `subscription OnDeleteVendor {
  onDeleteVendor {
    id
    name
  }
}
`;
