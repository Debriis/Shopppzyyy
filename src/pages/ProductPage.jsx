import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === Number(id))
  const { addToCart } = useCart()

  if(!product) return <div className="container" style={{padding:40}}>Product not found</div>

  return (
    <main className="container" style={{padding:30}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <div>
          <img src={product.img} alt={product.title} style={{width:'100%',borderRadius:12}} />
        </div>
        <div>
          <small className="muted">{product.category}</small>
          <h1>{product.title}</h1>
          <div className="muted">Rating: {product.rating} ★</div>
          <h2>₹{product.price}</h2>
          <p>Detailed description — replace this with the real product description from your backend.</p>
          <div style={{display:'flex',gap:12,marginTop:12}}>
            <button className="btn btn-primary" onClick={() => { addToCart(product); navigate('/cart') }}>Add & Go to Cart</button>
            <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  )
}
