import React from 'react'
import {Link, outlet} from 'react-router-dom'
import Logo from '../images/carrie_logo.png'
import '../index.css'

const Navbar = () => {
  return (
    <div className='up-top'>
    <nav className='navbar'>
        <Link to='/'> Home</Link>
        <Link to='/mission'> Mission</Link>
        <Link to='/resources'> Resources</Link>
        <Link to='/gallery'> Gallery</Link>
        <Link to='/about'> About</Link>
        <Link to='/contact'> Contact</Link>
    </nav>
    <img src={Logo} id="logo" alt=""/>
  
    <outlet />
    </div>
  )
}

export default Navbar