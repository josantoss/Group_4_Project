const axios = require('axios');

// ================= TELEBIRR UTILITIES =================
const getTelebirrToken = async () => {
  try {
    // If using dummy mode
    if (process.env.USE_DUMMY_PAYMENTS === 'true') {
      return 'dummy-telebirr-token';
    }

    const response = await axios.post(
      process.env.TELEBIRR_SANDBOX_URL + '/payment/v1/token',
      { appSecret: process.env.TELEBIRR_APP_SECRET },
      { 
        headers: { 
          'Content-Type': 'application/json',
          'X-APP-Key': process.env.TELEBIRR_FABRIC_APP_ID
        } 
      }
    );
    return response.data.token;
  } catch (error) {
    throw new Error(`Telebirr token generation failed: ${error.message}`);
  }
};

const createTelebirrPayload = (orderId, amount, phoneNumber) => {
  return {
    orderId,
    amount: parseFloat(amount).toFixed(2),
    phoneNumber,
    currency: 'ETB',
    callbackUrl: `${process.env.BASE_URL || 'http://localhost:5000'}/api/payments/telebirr/confirm`,
    merchantAppId: process.env.TELEBIRR_MERCHANT_APP_ID,
    shortcode: process.env.TELEBIRR_SHORTCODE,
  };
};

const sendTelebirrPayment = async (payload, token) => {
  try {
    // Dummy mode
    if (process.env.USE_DUMMY_PAYMENTS === 'true') {
      return {
        success: true,
        provider: 'telebirr',
        referenceId: `TB-${Date.now()}`,
        orderId: payload.orderId,
        amount: payload.amount,
        status: 'success',
        message: ' Telebirr payment successful ✅'
      };
    }

    const response = await axios.post(
      process.env.TELEBIRR_SANDBOX_URL + '/payment',
      payload,
      { 
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        } 
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Telebirr payment failed: ${error.message}`);
  }
};

// ================= CBE UTILITIES =================
const sendCBEPayment = async (amount, accountNumber) => {
  try {
    // Dummy mode
    if (process.env.USE_DUMMY_PAYMENTS === 'true') {
      return {
        success: true,
        provider: 'cbe',
        referenceId: `CBE-${Date.now()}`,
        accountNumber,
        amount: parseFloat(amount).toFixed(2),
        status: 'success',
        message: 'CBE payment successful ✅'
      };
    }

    const response = await axios.post(
      process.env.CBE_SANDBOX_URL + '/pay', 
      { 
        amount: parseFloat(amount).toFixed(2), 
        accountNumber 
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`CBE payment failed: ${error.message}`);
  }
};

// ================= STATUS UTILITIES =================
const isValidPaymentStatus = (status) => {
  return ['success', 'failed'].includes(status);
};

const canUpdatePaymentStatus = (currentStatus, newStatus) => {
  if (currentStatus !== 'pending') {
    return false; // Can't update if already processed
  }
  return ['success', 'failed'].includes(newStatus);
};

const getPaymentStatusMessage = (status) => {
  const messages = {
    pending: 'Payment is being processed',
    success: 'Payment completed successfully',
    failed: 'Payment failed'
  };
  return messages[status] || 'Unknown payment status';
};

// ================= ERROR HANDLING =================
const handlePaymentError = (error, provider) => {
  // Log full detail to server logs for debugging
  console.error(`${provider} payment error:`, error.response?.data || error.message || error);

  // Network/connection errors
  if (['ENOTFOUND', 'ECONNREFUSED', 'ETIMEDOUT'].includes(error.code)) {
    return `${provider} service not reachable. Check the sandbox URL and your internet connection.`;
  }

  // HTTP errors
  const status = error.response?.status;
  if (status === 400) return 'Invalid payment request. Please check your details.';
  if (status === 401 || status === 403) return 'Authentication failed with provider. Verify credentials in environment variables.';
  if (status === 404) return 'Payment endpoint not found. Verify the provider sandbox URL.';
  if (status === 500) return 'Payment service temporarily unavailable. Please try again later.';

  // Fallback
  if (process.env.NODE_ENV !== 'production') {
    return `${provider} payment failed: ${error.message || 'Unknown error'}`;
  }
  return `${provider} payment failed. Please try again.`;
};

module.exports = {
  // Telebirr
  getTelebirrToken,
  createTelebirrPayload,
  sendTelebirrPayment,
  
  // CBE
  sendCBEPayment,
  
  // Status
  isValidPaymentStatus,
  canUpdatePaymentStatus,
  getPaymentStatusMessage,
  
  // Error Handling
  handlePaymentError
};
