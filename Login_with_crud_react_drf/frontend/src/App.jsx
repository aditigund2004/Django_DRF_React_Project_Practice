import React from 'react'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import ProtectRouting from './pages/ProtectRouting';
import TransactionPage from './pages/TransactionPage';
import UserDetail from './pages/UserDetail';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <center>
        <Navbar/>
        <Routes>
          <Route path='/login' element = {<Login/>} />

          <Route element={<ProtectRouting/>}>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/transaction' element={<TransactionPage/>}/>
          <Route path ='/user' element = {<UserDetail/>}/>
          </Route>
        </Routes>        
      </center>
    </div>
  )
}
export default App


{/*
Mounting means a component is being created and added to the webpage (DOM) for the first time.

During mounting:
    Component function runs (render)
    React creates the DOM elements
    Component appears on the screen
    useEffect() runs after rendering

  
Unmounting means a component is removed from the webpage (DOM).


Mounting → Installing the bulb and turning it on 💡
Unmounting → Removing the bulb 🔌

  */}
