import React from 'react'
import './CategoryTabs.css'

const categories = ['All','Women','Men','Shoes','Bags','Accessories']

export default function CategoryTabs({ active, onChange }){
  return (
    <div className="category-tabs container">
      <ul>
        {categories.map(c=>(
          <li key={c} className={c===active ? 'active' : ''} onClick={()=>onChange(c)}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
