import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Mixtas — Demo</div>
        <div className="muted">Built with React & Vite</div>
      </div>
    </footer>
  )
}
