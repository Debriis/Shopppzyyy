import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Navbar.css'

export default function Navbar(){
  const { cart } = useCart()
  const navigate = useNavigate()
  const count = cart.reduce((s,i)=> s+i.qty, 0)

  return (
    <header className="mixtas-nav">
      <div className="nav-inner container">
        <div className="left">
          <button className="menu-btn" onClick={() => navigate('/')}>☰</button>
          <Link to="/" className="brand">Mixtas</Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Pages</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>

        <div className="right">
          <input className="search" placeholder="Search products..." onKeyDown={(e)=> {
            if(e.key === 'Enter') navigate(`/?q=${encodeURIComponent(e.target.value)}`)
          }} />
          <Link to="/cart" className="cart-link">
            🛒 <span className="cart-count">{count}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
