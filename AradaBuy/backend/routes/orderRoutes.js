const express= require('express');
const router = express.Router();
const orderController= require('../controllers/orderController');

router.post('/',orderController.createOrder);
router.get('/my-orders',orderController.getUserOrders);
router.get('/',orderController.getAllOrders);
router.put('/:id',orderController.updateOrderStatus);

module.exports=router;