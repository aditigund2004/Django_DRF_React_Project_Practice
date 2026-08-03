import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRouting = () => {
    const isLoggedin = localStorage.getItem( 'islogin')

  return (isLoggedin == 'yes') ? <Outlet/>: <Navigate to = '/login'/>
}

export default ProtectRouting


// Outlet is used in React Router v6 to render the child routes inside a parent route.

// Think of Outlet as a placeholder where React Router will display the matched child component.