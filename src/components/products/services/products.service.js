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

module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  addProduct: addProduct
};