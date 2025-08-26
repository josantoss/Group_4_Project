const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class PaymentService {
  // Telebirr Payment
  static async initiateTelebirrPayment(amount, customerPhone) {
    try {
      const response = await fetch(`${API_BASE_URL}/payment/telebirr/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          amount,
          customerPhone,
          method: 'Telebirr'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Telebirr payment failed');
      }

      return data;
    } catch (error) {
      console.error('Telebirr payment error:', error);
      throw error;
    }
  }

  // CBE Payment
  static async initiateCBEPayment(amount, accountNumber) {
    try {
      const response = await fetch(`${API_BASE_URL}/payment/cbe/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          amount,
          accountNumber,
          method: 'CBE'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'CBE payment failed');
      }

      return data;
    } catch (error) {
      console.error('CBE payment error:', error);
      throw error;
    }
  }

  // Get Payment Status
  static async getPaymentStatus(paymentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/payment/status/${paymentId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get payment status');
      }

      return data;
    } catch (error) {
      console.error('Get payment status error:', error);
      throw error;
    }
  }

  // Get Payment History
  static async getPaymentHistory() {
    try {
      const response = await fetch(`${API_BASE_URL}/payment/history`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get payment history');
      }

      return data;
    } catch (error) {
      console.error('Get payment history error:', error);
      throw error;
    }
  }

  // Validate Payment Inputs
  static validateTelebirrInputs(amount, phoneNumber) {
    const errors = [];

    if (!amount || amount <= 0) {
      errors.push('Amount must be greater than 0');
    }

    if (!phoneNumber) {
      errors.push('Phone number is required');
    } else if (!/^(\+251|0)?[79]\d{8}$/.test(phoneNumber)) {
      errors.push('Invalid phone number format');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateCBEInputs(amount, accountNumber) {
    const errors = [];

    if (!amount || amount <= 0) {
      errors.push('Amount must be greater than 0');
    }

    if (!accountNumber) {
      errors.push('Account number is required');
    } else if (!/^\d{10,16}$/.test(accountNumber)) {
      errors.push('Invalid account number format');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Format Amount for Display
  static formatAmount(amount) {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB'
    }).format(amount);
  }

  // Get Payment Status Color
  static getStatusColor(status) {
    const colors = {
      pending: 'text-yellow-600',
      success: 'text-green-600',
      failed: 'text-red-600'
    };
    return colors[status] || 'text-gray-600';
  }
}

export default PaymentService;

