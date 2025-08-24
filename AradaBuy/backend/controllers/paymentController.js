// controllers/paymentController.js

const { generateOrderId, formatAmount,createPaymentRecord } = require('../utils/paymentHelper');

const PaymentController = {

  payWithTelebirr: async (req, res) => {
    try {
      const { amount, customerPhone } = req.body;

      // Dummy Telebirr response
      const payment = {
        method: 'Telebirr',
        referenceId: generateOrderId('TB'),
        amount: formatAmount(amount),
        customerPhone,
        status: 'success'
      };

      return res.json({ success: true, message: 'Telebirr payment started ', data: payment });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Telebirr payment failed', error: error.message });
    }
  },

  confirmTelebirrPayment: async (req, res) => {
    try {
      const { referenceId, status } = req.body;

      const payment = { referenceId, status: status || 'success', method: 'Telebirr' };

      return res.json({ success: true, message: 'Telebirr payment confirmed ', data: payment });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Telebirr confirmation failed', error: error.message });
    }
  },

  payWithCBE: async (req, res) => {
    try {
      const { amount, accountNumber } = req.body;

      // Dummy CBE response
      const payment = {
        method: 'CBE',
        referenceId: generateOrderId('CBE'),
        amount: formatAmount(amount),
        accountNumber,
        status: 'success'
      };

      return res.json({ success: true, message: 'CBE payment started ', data: payment });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'CBE payment failed', error: error.message });
    }
  },

  confirmCBEPayment: async (req, res) => {
    try {
      const { referenceId, status } = req.body;

      const payment = { referenceId, status: status || 'success', method: 'CBE' };

      return res.json({ success: true, message: 'CBE payment confirmed ', data: payment });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'CBE confirmation failed', error: error.message });
    }
  },

  payWithCOD: async (req, res) => {
    try {
      const { amount, customerPhone } = req.body;

      const payment = {
        method: 'COD',
        referenceId: generateOrderId('COD'),
        amount: formatAmount(amount),
        customerPhone,
        status: 'success'
      };

      return res.json({ success: true, message: 'COD payment started ', data: payment });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'COD payment failed', error: error.message });
    }
  }

};

module.exports = PaymentController;
