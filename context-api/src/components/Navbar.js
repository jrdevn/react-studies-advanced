import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'> PageOne </NavLink>
        <NavLink to='/page2'> PageTwo </NavLink>
        <NavLink to='/page3'> PageThree </NavLink>
    </nav>
  )
}

export default Navbar