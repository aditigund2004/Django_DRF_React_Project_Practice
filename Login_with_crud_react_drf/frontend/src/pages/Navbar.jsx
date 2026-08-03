import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to='/login' >Login</NavLink>{" | "}

            <NavLink to='/home'>Home</NavLink>{" | "}
            <NavLink to='/transaction'>TransactionPage</NavLink>{" | "}
            <NavLink to='/user'>UserDetails</NavLink>
        </nav>
      
    </div>
  )
}

export default Navbar
