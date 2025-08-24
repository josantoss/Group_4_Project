// routes/paymentRoutes.js

const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');
const { validatePaymentInputs } = require('../utils/validate');

// Telebirr
router.post('/telebirr/pay', validatePaymentInputs, PaymentController.payWithTelebirr);
router.post('/telebirr/confirm', PaymentController.confirmTelebirrPayment);

// CBE
router.post('/cbe/pay', validatePaymentInputs, PaymentController.payWithCBE);
router.post('/cbe/confirm', PaymentController.confirmCBEPayment);

// COD
router.post('/cod/pay', validatePaymentInputs, PaymentController.payWithCOD);

module.exports = router;
