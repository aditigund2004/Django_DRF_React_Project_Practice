import React, { useEffect, useState } from 'react'
import { api } from './services'

const App = () => {

  const [form, setForm]= useState([])

  const [data, setData] = useState({name: "", age: "", address: ""})

  const loadData = ()=>{
    api.get(`crud/`)
    .then( (res)=>{
      setForm(res.data)
    })
  }
  useEffect( () =>{
    loadData();

  },[])

  const handleDelete = (id)=>{
    api.delete(`crud/${id}/`)
    .then( (res)=>{
      loadData();
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    api.post(`crud/`, data)
    .then( (res)=>{
      // setData(data)
      setData({name: "", age: "", address: ""})
      loadData()
    })
    setData({name: "", age: "", address: ""})

  }

  const handleInput = (e)=>{
    const {name, value} = e.target 
    setData({...data, [name]: value})
  }
  return (
    <div>
      <center>
        <h2>Form</h2>
        <form onSubmit={handleSubmit} > 
          name : <input type="text" name = 'name' value={data.name} onChange={handleInput} required/><br></br><br></br>
          age : <input type="text" name = 'age' value={data.age} onChange={handleInput} required/><br></br><br></br>
          address : <input type="text" name = 'address' value={data.address} onChange={handleInput} required/><br></br><br></br>

          <button type='submit'>Add</button>
        </form>

        <br></br><br></br>

        <h3>Data</h3>
        <table border = '3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              form.map( (u)=> (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.address}</td>
                <td>
                  <button onClick={() => handleDelete(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
      
    </div>
  )
}

export default App
