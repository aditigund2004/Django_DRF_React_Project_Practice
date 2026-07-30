import React, { useEffect, useState } from 'react'
import AdminDash from './AdminDash'
import UserDash from './UserDash'
import { api } from '../../Services'

const Login = () => {
    const[login, setLogin]=useState({email:'',password:''})
    const[valid, setValid]=useState("")


    const handelChange=(e)=>{
        setLogin({...login, [e.target.name]:e.target.value})
    }

    const handelSubmit=async(e)=>{
        e.preventDefault()
        const res = await api.get(`show/`)
        const user = res.data.find((e)=> e.email === login.email && e.password === login.password)
        
        if (user) {
            if (user.role == 'admin') {
                setValid("admin")
            }else if(user.role == 'user'){
                setValid("user")
            }
            
        }else{
            setValid("invalid")
        }
    }


    if (valid=="admin") {
        return <AdminDash/>
    }else if(valid=="user"){
        return <UserDash/>
    }else if(valid == "invalid"){
        return <h2>{"not valid User"}</h2>
    }
  
  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handelSubmit}>
            Email : <input type="text" name='email' value={login.email} onChange={handelChange} required /><br /><br />
            Password : <input type="text" name='password' value={login.password} onChange={handelChange} required /><br /><br />
            <button>Login</button>

        </form>
    </div>
  )
}

export default Login