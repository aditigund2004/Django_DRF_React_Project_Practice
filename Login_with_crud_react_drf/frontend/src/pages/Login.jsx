import React, { use, useState } from 'react'
import { api } from '../services'
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [login, setLogin] = useState({email: '', password: ''})

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const user = await api.get(`/`)

    const usr = user.data.find( (u)=> u.email === login.email && u.password === login.password)

    if(!usr){
      alert('user not found')
    }else{
      // return <Home/>
      localStorage.setItem('islogin', 'yes') 
      localStorage.setItem('email', usr.email)
      localStorage.setItem('email', usr.password)
      navigate('/home') 
    } 
  }
  return (
    <div>
        <center>
          <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                email : <input type="text" name = 'email' value={login.email} onChange={(e)=> setLogin({...login, [e.target.name]: e.target.value})} required/> <br /> <br />
                password : <input type="text" name = 'password' value={login.password} onChange={(e)=> setLogin({...login, [e.target.name]: e.target.value})} required/> <br /> <br />

                <button>Login here</button>

            </form>
        </center>
      
    </div>
  )
}

export default Login
