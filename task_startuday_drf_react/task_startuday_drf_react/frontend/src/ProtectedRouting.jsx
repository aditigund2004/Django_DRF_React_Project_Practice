import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouting = ({children}) => {

    const isLoggedin = localStorage.getItem("userRole");
    console.log("isLoggedin : ", isLoggedin)

    return (isLoggedin == "admin" || "user" ) ? children : <Navigate to="/login" />
}

export default ProtectedRouting






