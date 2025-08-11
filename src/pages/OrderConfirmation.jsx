import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function OrderConfirmation(){
  const { state } = useLocation()
  const order = state?.order || JSON.parse(localStorage.getItem('mixtas_orders') || '[]')[0]

  if(!order) return <div className="container" style={{padding:30}}>No order data</div>

  return (
    <main className="container" style={{padding:30}}>
      <h2>Order Confirmed</h2>
      <div style={{background:'#fff',padding:20,borderRadius:10}}>
        <p>Thank you <strong>{order.customer.name}</strong> — your order <strong>{order.id}</strong> has been placed.</p>
        <p className="muted">A confirmation (demo) was saved in your browser storage.</p>
        <h3>Summary</h3>
        {order.items.map(it => (
          <div key={it.id} style={{display:'flex',justifyContent:'space-between',marginTop:8}}>
            <div>{it.title} × {it.qty}</div>
            <div>₹{it.qty * it.price}</div>
          </div>
        ))}
        <div style={{marginTop:10}}><strong>Total:</strong> ₹{order.total}</div>
        <div style={{marginTop:12}}>
          <Link to="/" className="btn">Continue Shopping</Link>
        </div>
      </div>
    </main>
  )
}
