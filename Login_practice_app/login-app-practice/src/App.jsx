import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'

const App = () => {
  return (
    <div>
        <center>
            <Routes>
                <Route path = "/" element = {<LoginPage/>}/>
                <Route path = "admin" element = {<AdminDashboard/>}/>
                <Route path = "user" element = {<UserDashboard/>}/>
            </Routes>
        </center>
      
    </div>
  )
}

export default App
