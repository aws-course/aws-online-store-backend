const _productsDal = require('@products/dal/products.dal');

function getProducts(start, count) {
  return _productsDal.getProducts(start, count);
}

function getProduct(id) {
  return _productsDal.getProductById(id);
}

function addProduct(prod) {
  return _productsDal.addProduct(prod);
}

function updateProduct(prod) {
  let productToUpdate = _productsDal.getProductById(prod.id);
  let { id, ...rest } = prod;
  return _productsDal.updateProduct({
    ...productToUpdate,
    ...rest
  });
}

function removeProduct(id) {
  let productToRemove = _productsDal.getProductById(id);
  _productsDal.removeProduct(productToRemove);
}

module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  addProduct: addProduct,
  updateProduct: updateProduct,
  removeProduct: removeProduct
};
