const express = require('express');
const router =express.Router();
const productController =require('../controllers/productController');

//Routes
router.get('/',productController.getAllProducts);// /api/products
router.get('/:id',productController.getProductById); // /api/products/:id
router.post('/',productController.createProduct); //POST new product
router.put('/:id',productController.updateProduct);  //PUT update
router.delete('/id',productController.deleteProduct); //Delete

module.exports=router;