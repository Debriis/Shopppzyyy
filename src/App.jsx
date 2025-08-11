import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  )
}
