import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import CategoryTabs from '../components/CategoryTabs/CategoryTabs'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import PromotionalBanners from '../components/PromotionalBanners/PromotionalBanners'
import { products as seed } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Home(){
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const { addToCart } = useCart()

  const filtered = seed.filter(p => {
    const matchesCat = category === 'All' ? true : p.category === category
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
    return matchesCat && matchesQuery
  })

  return (
    <>
      <Hero />
      <CategoryTabs active={category} onChange={setCategory} />
      <div className="container" style={{paddingTop:6}}>
        <ProductGrid products={filtered} onAdd={addToCart} />
      </div>
      <PromotionalBanners />
    </>
  )
}
