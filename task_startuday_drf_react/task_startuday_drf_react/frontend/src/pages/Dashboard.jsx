import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services';

const Dashboard = () => {

  const loginPerson = localStorage.getItem("userRole");

  const [form, setForm] = useState({ name: '', email: '', password: '', role: '' })

  const navig = useNavigate();

  const handleChange = (e) => {

    const {name , value} = e.target ;

    setForm({...form ,[name]:value})
  }

  const handleLogout = () => {

    navig('/login')

    localStorage.removeItem("isLogin")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
    const res = await api.post('/', form)
    console.log("res -> ", res)
    setForm({ name: '', email: '', password: '', role: '' })

  }
  return (
    <div>

      <h2>Welcome to Dashboard : {loginPerson.toUpperCase()}</h2>

      {
        loginPerson == 'admin' && (
          <>
            <form onSubmit={handleSubmit}>
              Name : <input type="text" name='name' value={form.name} onChange={handleChange} /><br /><br />
              email : <input type="text" name='email' value={form.email} onChange={handleChange} /><br /><br />
              password : <input type="text" name='password' value={form.password} onChange={handleChange} /><br /><br />
              role : <select name="role" onChange={handleChange}>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </select> <br /><br />
                <button type='submit'>
                  Add User
                </button>
            </form>
          </>
        )
      }
 <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard