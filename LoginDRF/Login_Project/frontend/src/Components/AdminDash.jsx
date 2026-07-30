import React, { useEffect, useState } from 'react'
import { api } from '../../Services'

const AdminDash = () => {
    const[data,setData]=useState([])
    const[form, setForm]=useState({name:'',email:'',mobile:'',password:'',role:''})
    const[change,setChange]=useState(null)
    const LoadAll=async()=>{
        const {data} = await api.get(`show/`)
        setData(data)
    }

    const handelDelete=async(id)=>{
        await api.delete(`delete/${id}/`)
        LoadAll()
    }

    const handelChange=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handelSubmit=async(e)=>{
        e.preventDefault()
        if(change){
            await api.put(`update/${change.id}/`,form)
            setChange(null)

        }else{
            await api.post(`create/`,form)
        }
        setForm({name:'',email:'',mobile:'',password:'',role:''})
        LoadAll()
    }
    const handelUpdate=(e)=>{
        setForm(e)
        setChange(e)
    }
    useEffect(()=>{
        LoadAll()
    },[])
  return (
    <div>
        <h2>Form For Admin</h2>
        <form onSubmit={handelSubmit}>
            Name: <input type="text" name='name' value={form.name} onChange={handelChange} required/><br /><br />
            Email: <input type="text" name='email' value={form.email} onChange={handelChange} required/><br /><br />
            Mobile: <input type="text" name='mobile' value={form.mobile} onChange={handelChange} required/><br /><br />
            Password: <input type="text" name='password' value={form.password} onChange={handelChange} required/><br /><br />
            Role : <select name="role" name='role' value={form.role} onChange={handelChange}>
                <option value="">select role</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
            </select><br /><br />
            <button>Submit</button><br /><br />
        </form>
        <h2>Admin Dashboard</h2>
        <table border={2} cellPadding={20}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>{e.password}</td>
                            <td>{e.role}</td>
                            <td>
                                <button onClick={()=>handelDelete(e.id)}>Delete</button>
                                <button onClick={()=>handelUpdate(e)}>Update</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AdminDash