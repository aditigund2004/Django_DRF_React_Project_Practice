import React, { useEffect, useState } from 'react'
import { api } from '../services'

const Admin = () => {
    const [data, setData] = useState([])

    const [from, setForm] = useState({name : '', email: '', mobile: '', password: '', role: 'user'})

    const [update, setUpdate] = useState(null)
    
        const handleSubmit = (e)=>{
            e.preventDefault()

            if(update)
            {
                api.put(`/${update.id}/`, from)
                .then( (res)=>{
                    loadData()
                    setForm(res.data)
                    setUpdate(null)
                })

            }else{
            // api.post(`/`, from)
            // .then( (res)=>{
            //     console.log(res.data)
            //     loadData()
            //     setForm(res.data)
            // })
            // .catch( (err) => {
            //     console.log(err)
            // })
            api.post(`/`, from)
           .then((res) => {
            console.log("User Added:", res.data);

            loadData(); // refresh table

            setForm({
                name: '',
                email: '',
                mobile: '',
                password: '',
                role: ''
            });

        })
        .catch((err) => {
            console.log(err.response.data);
        });
        }
    
        }
        
    const handleInput = (e)=>{
        const {name, value} = e.target
        setForm({...from, [name]: value})
    }


    const loadData = () =>{
        api.get(`/`)
        .then( (res)=>{
            setData(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    useEffect ( () =>{
        loadData();
    }, [])


    const handleDelete = (id)=>{
        api.delete(`/${id}/`)
        .then( (res)=>{
            loadData()
        })
    }

    const handleUpdate = (dt) =>{
        setForm(dt)
        setUpdate(dt)
    }
  return (
    <div>
        <center>

            <h3>Admin Page</h3>
            <form onSubmit={handleSubmit}>

                name : <input type="text" name = 'name' value={from.name} onChange={handleInput} required/><br></br><br></br>
                email : <input type="text" name = 'email' value={from.email} onChange={handleInput} required/><br></br><br></br>
                mobile : <input type="text" name = 'mobile' value={from.mobile} onChange={handleInput} required/><br></br><br></br>
                password : <input type="text" name = 'password' value={from.password} onChange={handleInput} required/><br></br><br></br>
                role : <select name="role" value={from.role} onChange={handleInput}>
                    <option value="user">user</option>
                    <option value="admin">admin</option>

                </select>
                <br></br>
                <br></br>


                <button>Add</button>

            </form>

            <br></br>

            <table border = '3'>
                <thead>
                    <tr >
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>password</th>
                        <th>role</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( (u) => ( 
                            <tr key = {u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.mobile}</td>
                                <td>{u.password}</td>
                                <td>{u.role}</td>
                                <td>
                                    <button onClick={ () => handleDelete (u.id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={ () => handleUpdate (u)}>update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                
            </table>

        </center>
      
    </div>
  )
}

export default Admin
