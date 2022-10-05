import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        {/* forma antiga */}
        {/* <Link to='/'> Home </Link>
        <Link to='/about'> Sobre </Link> */}
        {/* <NavLink to='/' className={({isActive}) => (isActive ? 'active' : null)}> Home </NavLink>
        <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : null)}> Sobre </NavLink> */}
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> Sobre </NavLink>
    </nav>
  )
}

export default Navbar