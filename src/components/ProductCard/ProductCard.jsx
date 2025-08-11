import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product, onAdd }){
  return (
    <article className="product-card card">
      <Link to={`/product/${product.id}`} className="img-wrap">
        <img src={product.img} alt={product.title} loading="lazy" />
      </Link>
      <div className="p-body">
        <small className="muted">{product.category}</small>
        <h3 className="p-title">{product.title}</h3>
        <div className="p-bottom">
          <div className="price">₹{product.price}</div>
          <button className="btn add-btn" onClick={onAdd}>Add to cart</button>
        </div>
      </div>
    </article>
  )
}
