import React from 'react'
import { Link } from 'react-router-dom'
function HeaderBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark shadow'>
        <span className='navbar-brand mb-0 h1'></span>
        <ul className='navbar-nav'>
          <li className='nav-item'><Link to="/" className='nav-link text-primary font-weight-bold'>Home</Link></li>
          <li className='nav-item'><Link to="/about" className='nav-link text-primary'>About</Link></li>
          <li className='nav-item'><Link to="/namelist" className='nav-link text-primary'>Name List</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderBar