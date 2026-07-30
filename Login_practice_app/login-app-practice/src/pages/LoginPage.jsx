import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services';


const LoginPage = () => {

    const [login, setLogin] = useState({name: "", password: ""})

    const navigate = useNavigate();

    const handleInput = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleLogin = async (e)=>{
        e.preventDefault()

        const user = await api.get(`/`)

        const all = user.data.find( (u)=> u.name == login.name && u.password == login.password)

        if(!all) {
            alert("invalid user and password")
            return
        }

        if(all.role == 'admin'){
            navigate('admin')
        }
        else if(all.role == 'user'){
            navigate("user")
        }
        else {
            alert("user not found")
        }
    }
  return (
    <div>
        <center>
            <form onSubmit={handleLogin}> 

                name : <input type="text" name = 'name' value={login.name} onChange={handleInput} required /> <br /><br />
                password : <input type="text" name = 'password' value={login.password} onChange={handleInput} required /> <br /><br />

                <button>Login here</button>
            </form>

        </center>
      
    </div>
  )
}

export default LoginPage
