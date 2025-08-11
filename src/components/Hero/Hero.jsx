import React, { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  { id:1, title:'Jackets for the Modern Man', cta:'Discovery Now', img:'https://picsum.photos/seed/hero1/1400/700' },
  { id:2, title:'New Arrivals This Week', cta:'Shop New', img:'https://picsum.photos/seed/hero2/1400/700' },
  { id:3, title:'Trendsetting Bags for Her', cta:'Explore Bags', img:'https://picsum.photos/seed/hero3/1400/700' }
]

export default function Hero(){
  const [idx, setIdx] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1) % slides.length), 4500)
    return ()=> clearInterval(t)
  },[])
  return (
    <section className="hero">
      {slides.map((s,i) => (
        <div key={s.id} className={`hero-slide ${i===idx ? 'active' : ''}`} style={{ backgroundImage:`url(${s.img})` }}>
          <div className="hero-inner">
            <small className="muted">URBAN EDGE</small>
            <h1>{s.title}</h1>
            <button className="btn btn-primary">{s.cta}</button>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((_,i)=>(<button key={i} className={`dot ${i===idx ? 'on' : ''}`} onClick={()=>setIdx(i)} />))}
      </div>
    </section>
  )
}
