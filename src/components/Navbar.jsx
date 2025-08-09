import React, { useState } from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling


export default function Navbar({ cartCount, onOpenCart, onSearch, onCategory }) {
  const [q, setQ] = useState('')
  function handleSearch(e) {
    setQ(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="brand">Test <span className="muted">Shop</span></div>
        <nav className="nav-links">
          <button className="link">Home</button>
          <button className="link">Shop</button>
          <button className="link">Pages</button>
          <button className="link">Blog</button>
          <button className="link">Contact</button>
        </nav>
      </div>

      <div className="nav-right">
        <input
          value={q}
          onChange={handleSearch}
          className="search"
          placeholder="Search products..."
        />
        <select className="cat" onChange={(e) => onCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Shoes">Shoes</option>
          <option value="Bags">Bags</option>
          <option value="Accessories">Accessories</option>
        </select>
        <button className="cart-btn" onClick={onOpenCart}>
          Cart <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  )
}
import React, { useState } from 'react'

export default function Navbar({ cartCount, onOpenCart, onSearch, onCategory }) {
  const [q, setQ] = useState('')
  function handleSearch(e) {
    setQ(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="brand">Mixtas <span className="muted">Shop</span></div>
        <nav className="nav-links">
          <button className="link">Home</button>
          <button className="link">Shop</button>
          <button className="link">Pages</button>
          <button className="link">Blog</button>
          <button className="link">Contact</button>
        </nav>
      </div>

      <div className="nav-right">
        <input
          value={q}
          onChange={handleSearch}
          className="search"
          placeholder="Search products..."
        />
        <select className="cat" onChange={(e) => onCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Shoes">Shoes</option>
          <option value="Bags">Bags</option>
          <option value="Accessories">Accessories</option>
        </select>
        <button className="cart-btn" onClick={onOpenCart}>
          Cart <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  )
}

