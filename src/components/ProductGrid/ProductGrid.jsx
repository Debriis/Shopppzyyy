import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, onAdd }){
  return (
    <section className="product-grid container">
      <h2 className="section-title">New Arrivals</h2>
      <div className="grid">
        {products.length === 0 ? <div className="no-results">No products</div> : products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={() => onAdd(p)} />
        ))}
      </div>
    </section>
  )
}
