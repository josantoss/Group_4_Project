const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// Telebirr routes
router.post('/telebirr/pay', PaymentController.payWithTelebirr);       // Initiate payment
router.post('/telebirr/confirm', PaymentController.confirmTelebirrPayment); // Confirm payment

// CBE routes
router.post('/cbe/pay', PaymentController.payWithCBE);                  // Initiate payment
router.post('/cbe/confirm', PaymentController.confirmCBEPayment);      // Confirm payment

module.exports = router;
