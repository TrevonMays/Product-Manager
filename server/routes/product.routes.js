const express = require('express');
const productRouter = express.Router();
const {
    getAllProducts,
    getOneProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller');

// /api/products
productRouter.route('/')
    .get(getAllProducts)
    .post(insertProduct);

// /api/products/:id
productRouter.route('/:id')
    .get(getOneProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = productRouter;