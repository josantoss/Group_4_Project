#!/bin/bash

# Check if frontend and backend folders exist
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
  echo "❌ Make sure 'frontend/' and 'backend/' folders already exist before running this script."
  exit 1
fi

# === Backend structure ===
mkdir -p backend/config
mkdir -p backend/models
mkdir -p backend/controllers
mkdir -p backend/routes
mkdir -p backend/middleware
mkdir -p backend/utils
mkdir -p backend/seeders

touch backend/config/db.js
touch backend/config/env.js

touch backend/models/User.js
touch backend/models/Product.js
touch backend/models/Order.js

touch backend/controllers/authController.js
touch backend/controllers/productController.js
touch backend/controllers/orderController.js

touch backend/routes/authRoutes.js
touch backend/routes/productRoutes.js
touch backend/routes/orderRoutes.js

touch backend/middleware/authMiddleware.js
touch backend/middleware/errorMiddleware.js

touch backend/utils/validate.js

touch backend/server.js
touch backend/.env

# === Frontend structure ===
mkdir -p frontend/src/assets
mkdir -p frontend/src/components
mkdir -p frontend/src/pages
mkdir -p frontend/src/context
mkdir -p frontend/src/services

touch frontend/src/components/Header.jsx
touch frontend/src/components/Footer.jsx
touch frontend/src/components/ProductCard.jsx
touch frontend/src/components/Button.jsx

touch frontend/src/pages/Home.jsx
touch frontend/src/pages/ProductDetails.jsx
touch frontend/src/pages/Login.jsx
touch frontend/src/pages/Signup.jsx
touch frontend/src/pages/Cart.jsx
touch frontend/src/pages/Contact.jsx

touch frontend/src/context/AuthContext.jsx
touch frontend/src/context/CartContext.jsx

touch frontend/src/services/authService.js
touch frontend/src/services/productService.js

touch frontend/src/App.jsx
touch frontend/src/main.jsx
touch frontend/src/index.css

echo "✅ Files and folders added inside existing 'frontend/' and 'backend/'!"
