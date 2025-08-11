import React from 'react'
import './PromotionalBanners.css'

export default function PromotionalBanners(){
  return (
    <section className="promo container">
      <div className="promo-grid">
        <div className="big">
          <h3>Where Dreams Meet Couture</h3>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="cols">
          <div className="col"> <h4>Enchanting Styles</h4><button className="btn">Shop</button></div>
          <div className="col"> <h4>Chic Footwear</h4><button className="btn">Shop</button></div>
        </div>
      </div>
    </section>
  )
}
