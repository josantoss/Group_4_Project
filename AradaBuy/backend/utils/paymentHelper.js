// utils/paymentHelper.js

const { Payment } = require('../models/Payment');  // Import Payment model

// Generate unique order ID
const generateOrderId = (prefix = 'ORDER') => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${prefix}-${timestamp}-${random}`;
};

// Format amount safely
const formatAmount = (amount) => {
  return parseFloat(amount).toFixed(2);
};

// Create and save payment record in DB
const createPaymentRecord = async (paymentData) => {
  const record = await Payment.create({
    transactionId: paymentData.transactionId || generateOrderId("TXN"),
    reference: paymentData.reference || generateOrderId("REF"),
    method: paymentData.method,
    amount: Number(formatAmount(paymentData.amount)),
    status: paymentData.status || "PENDING"
  });

  return record.toJSON();
};

module.exports = {
  generateOrderId,
  formatAmount,
  createPaymentRecord
};
