const Payment = require('../models/paymentModel');
const axios = require('axios');
const { sendSuccess, sendError } = require('../utils/responseHandler');

const PaymentController = {

  async payWithTelebirr(req, res) {
    try {
      const { amount, customerPhone } = req.body;

      const response = await axios.post('https://api.telebirr.com/pay', { amount, customerPhone });
      const paymentId = response.data.paymentId;

      const payment = await Payment.create({
        method: 'Telebirr',
        amount,
        customerPhone,
        referenceId: paymentId,
        status: 'pending',
      });

      return sendSuccess(res, payment, 'Telebirr payment initiated successfully');
    } catch (error) {
      return sendError(res, error.message || 'Telebirr payment failed');
    }
  },

  async confirmTelebirrPayment(req, res) {
    try {
      const { paymentId, status } = req.body;

      const payment = await Payment.findOne({ where: { referenceId: paymentId, method: 'Telebirr' } });
      if (!payment) return sendError(res, 'Payment not found', 404);

      payment.status = status;
      await payment.save();

      return sendSuccess(res, payment, 'Telebirr payment confirmed successfully');
    } catch (error) {
      return sendError(res, error.message || 'Telebirr confirmation failed');
    }
  },

  async payWithCBE(req, res) {
    try {
      const { amount, accountNumber } = req.body;

      const response = await axios.post('https://api.cbe.com/pay', { amount, accountNumber });
      const transactionId = response.data.transactionId;

      const payment = await Payment.create({
        method: 'CBE',
        amount,
        accountNumber,
        referenceId: transactionId,
        status: 'pending',
      });

      return sendSuccess(res, payment, 'CBE payment initiated successfully');
    } catch (error) {
      return sendError(res, error.message || 'CBE payment failed');
    }
  },

  async confirmCBEPayment(req, res) {
    try {
      const { transactionId, status } = req.body;

      const payment = await Payment.findOne({ where: { referenceId: transactionId, method: 'CBE' } });
      if (!payment) return sendError(res, 'Payment not found', 404);

      payment.status = status;
      await payment.save();

      return sendSuccess(res, payment, 'CBE payment confirmed successfully');
    } catch (error) {
      return sendError(res, error.message || 'CBE confirmation failed');
    }
  },
};

module.exports = PaymentController;
