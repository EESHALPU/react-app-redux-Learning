import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../../utils/Sotre/Store'

export const Navbar = () => {
  let items = useSelector(store=>store.cart.items)
  console.log('----item in navbar', items)
  return (
    <div classNames='d-flex justify-content-end'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <Link to = "/" className="navbar-brand" href="#">ThinkJS</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to = "/" className="nav-item nav-link active" href="#">Home</Link>
        <Link to = "/about" className="nav-item nav-link" href="#">About</Link>
        <Link to = "/register" className="nav-item nav-link" href="#">Register</Link>
        <Link to = "/login" className="nav-item nav-link" href="#">Login</Link>
        <div className='cart'>
        <Link to = "#" className="nav-item nav-link" href="#">Cart {items.length}</Link>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
