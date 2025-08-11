import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage(){
  const { cart, removeOne, setQty, clearCart, totalAmount } = useCart()
  const navigate = useNavigate()
  const total = totalAmount()

  return (
    <main className="container" style={{padding:30}}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <div className="empty">Your cart is empty — <Link to="/">Continue shopping</Link></div>
      ) : (
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:24}}>
          <div>
            {cart.map(item=>(
              <div key={item.id} style={{display:'flex',gap:12,alignItems:'center',padding:'12px 0',borderBottom:'1px solid #eee'}}>
                <img src={item.img} alt={item.title} style={{width:96,height:96,objectFit:'cover',borderRadius:8}} />
                <div style={{flex:1}}>
                  <strong>{item.title}</strong>
                  <div className="muted">₹{item.price}</div>
                  <div style={{marginTop:8,display:'flex',gap:8,alignItems:'center'}}>
                    <button className="btn" onClick={() => removeOne(item.id)}>-</button>
                    <input type="number" value={item.qty} onChange={(e)=> setQty(item.id, Number(e.target.value) || 1)} style={{width:60,padding:6,borderRadius:6,border:'1px solid #eee'}} />
                    <button className="btn" onClick={()=> setQty(item.id, item.qty + 1)}>+</button>
                  </div>
                </div>
                <div><strong>₹{item.price * item.qty}</strong></div>
              </div>
            ))}
            <div style={{marginTop:12}}>
              <button className="btn secondary" onClick={clearCart}>Clear cart</button>
            </div>
          </div>

          <aside style={{background:'#fff',padding:18,borderRadius:10}}>
            <h3>Order Summary</h3>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}><div className="muted">Subtotal</div><div>₹{total}</div></div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}><div className="muted">Shipping</div><div>₹99</div></div>
            <hr style={{margin:'12px 0'}} />
            <div style={{display:'flex',justifyContent:'space-between',fontWeight:700}}> <div>Total</div><div>₹{total + 99}</div></div>
            <div style={{marginTop:14}}>
              <button className="btn btn-primary" onClick={() => navigate('/checkout')}>Checkout</button>
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}
