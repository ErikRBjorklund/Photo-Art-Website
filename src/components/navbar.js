import React from 'react'
import navStyles from './css/navbar.css'
import button_style from './css/button.css'
import { Link } from 'react-router-dom'

const navbar = () => {
  // Navbar per specifications
  return (
    <header>
      <div className="navigation-wrapper">
        <nav id="nav1">
          <ul className="navigation-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/art">Art</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/commissions">Commissions</Link></li>
            <li><Link to="/store" className="button" id="store">Store</Link></li>
            <li id="checkout"><Link to="/checkout"><img src="https://www.pngkey.com/png/full/231-2317482_white-shopping-cart-png-download-buy-icon-white.png" height="24px" /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default navbar