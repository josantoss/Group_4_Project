import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import WishList from './pages/WishList'; 
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ContactUs from './pages/Contact';
import { WishListProvider } from './context/WishListContext';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <WishListProvider> 
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/shop/men" element={<Shop category="men" />} />
          <Route path="/shop/women" element={<Shop category="women" />} />
          <Route path="/shop/kids" element={<Shop category="kids" />} />
          <Route path="/shop/youth" element={<Shop category="youth" />} />
          <Route path="/shop/ethiopia-culture" element={<Shop category="ethiopia-culture" />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </WishListProvider>
  );
}

export default App;