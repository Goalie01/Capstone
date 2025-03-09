import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <header>
        <a href="#" className="logo">Pizza Planet</a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="cart.html">Cart</Link></li>
           
            <div className="bx bx-moon" id="darkmode"></div>
        </ul>
        </header>
 
) 
}

export default Home