import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout(){
  const { cart, clearCart, totalAmount } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', address:'', payment:'COD' })
  const [loading, setLoading] = useState(false)

  const total = totalAmount() + 99

  function handlePlace(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.address){ alert('Fill required fields'); return }
    setLoading(true)
    // Demo: simulate order processing (no backend)
    setTimeout(()=>{
      const order = {
        id: 'ORD' + Date.now(),
        items: cart,
        total,
        customer: form,
        createdAt: new Date().toISOString()
      }
      // store order in localStorage as demo
      const prev = JSON.parse(localStorage.getItem('mixtas_orders') || '[]')
      localStorage.setItem('mixtas_orders', JSON.stringify([order, ...prev]))
      clearCart()
      setLoading(false)
      navigate('/order-confirmation', { state: { order } })
    }, 1200)
  }

  return (
    <main className="container" style={{padding:30}}>
      <h2>Checkout</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:24}}>
        <form onSubmit={handlePlace} style={{background:'#fff',padding:18,borderRadius:10}}>
          <label className="muted">Name*</label>
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,margin:'8px 0',border:'1px solid #eee'}} />
          <label className="muted">Email*</label>
          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,margin:'8px 0',border:'1px solid #eee'}} />
          <label className="muted">Address*</label>
          <textarea required value={form.address} onChange={e=>setForm({...form,address:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,margin:'8px 0',border:'1px solid #eee'}} />
          <label className="muted">Payment method</label>
          <select value={form.payment} onChange={e=>setForm({...form,payment:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,margin:'8px 0',border:'1px solid #eee'}}>
            <option>COD</option>
            <option>Mock Card</option>
            <option>UPI (Demo)</option>
          </select>

          <div style={{marginTop:12,display:'flex',gap:12}}>
            <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Placing...' : `Place Order — ₹${total}`}</button>
            <button type="button" className="btn" onClick={()=>navigate('/cart')}>Back to cart</button>
          </div>
        </form>

        <aside style={{background:'#fff',padding:18,borderRadius:10}}>
          <h3>Order Summary</h3>
          {cart.map(i=>(
            <div key={i.id} style={{display:'flex',justifyContent:'space-between',gap:8,marginTop:8}}>
              <div>{i.title} × {i.qty}</div>
              <div>₹{i.qty * i.price}</div>
            </div>
          ))}
          <hr style={{margin:'12px 0'}} />
          <div style={{display:'flex',justifyContent:'space-between'}}><div>Subtotal</div><div>₹{totalAmount()}</div></div>
          <div style={{display:'flex',justifyContent:'space-between'}}><div>Shipping</div><div>₹99</div></div>
          <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,marginTop:6}}><div>Total</div><div>₹{total}</div></div>
        </aside>
      </div>
    </main>
  ) 
}
