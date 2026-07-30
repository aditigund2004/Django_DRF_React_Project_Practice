import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './LoginPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRouting'

const App = () => {

  return (
    <div>
      <center>
        <h1>Login here</h1>

        <Navbar /> <br /><br />

        <Routes>

          <Route path='login' element={<Login />} />

          <Route path='dashboard' element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
          } />

        </Routes>


      </center>
    </div>
  )
}

export default App