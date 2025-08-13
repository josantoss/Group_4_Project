const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes=require('./routes/orderRoutes')
const Order = require('./models/Order');
const Contact=require('./models/Contact')
const contactRoutes=require('./routes/contactRoutes')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/contacts',contactRoutes)


// Health check
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Sync DB and start server
sequelize.sync({ alter: true })  // creates/updates tables in SQLite file
  .then(() => {
    console.log('SQLite DB ready ✅');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB sync error:', err);
  });
