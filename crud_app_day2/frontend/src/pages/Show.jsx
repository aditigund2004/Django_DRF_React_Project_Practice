import React, { useEffect, useState } from 'react'
import { api } from '../service'

const Show = ({accept, handleUpdate}) => {
    const [form, setForm] =useState([])

    const loadData = ()=>{
        api.get(`/`)
        .then( (res) =>{
            setForm(res.data)
        })
    }

    useEffect( ()=>{
        loadData();
    } ,[accept])
    const handleDelete = (id)=>{
        api.delete(`/${id}/`)
        .then( (res)=>{
            console.log(res.data)
            loadData()
        })
        .catch( (err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <center>
            <table border = '4'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    form.map( (u)=>(

                    
                    <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                        <td>
                            <button onClick={() => handleDelete(u.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => handleUpdate(u)}>Update</button>
                        </td>
                    </tr>
                    
                ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default Show
