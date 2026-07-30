import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to='login'>Login</NavLink>
        </nav>
      
    </div>
  )
}

export default Navbar
