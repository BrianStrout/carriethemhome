import React from 'react'
import {Link, outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
        <Link to='/'> Home</Link>
        <Link to='/mission'> Mission</Link>
        <Link to='/resources'> Resources</Link>
        <Link to='/gallery'> Gallery</Link>
        <Link to='/about'> About</Link>
        <Link to='/contact'> Contact</Link>
    </nav>
    <p>hi</p>
    <outlet />
    </div>
  )
}

export default Navbar