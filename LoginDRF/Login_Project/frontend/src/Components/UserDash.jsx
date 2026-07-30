import React, { useEffect, useState } from 'react'
import { api } from '../../Services'

const UserDash = () => {
    const[data,setData]=useState([])

    const LoadAll=async()=>{
        const {data} = await api.get(`show/`)
        setData(data)
    }
 useEffect(()=>{
        LoadAll()
    },[])
  return (
    <div>
        <h2>UserDashBoard</h2>
        <table border={2} cellPadding={20}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>Role</th>
                    
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
                           
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserDash