import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Shop from './pages/Shop'

function App() {


  return (
    <Router>
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
      </Routes>
      <Footer />
    </Router>
)
}

export default App
