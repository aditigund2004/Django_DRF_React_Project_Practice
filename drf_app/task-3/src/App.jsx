import React, { useEffect, useState } from 'react'
import { api } from './services'

const App = () => {

  const [form, setForm] = useState([])

  const [data, setData] = useState({name: "", role: ""})

  const [update, setUpdate] = useState(null)

  const loadData = ()=>{
    api.get(`/`)
    .then( (res) =>{
      setForm(res.data)

    })
    .catch( (err) =>{
      console.log(err)
    })
  }

  useEffect( () =>{
    loadData();
  }, [])

  const handleDelete = (id)=>{
    api.delete(`/${id}/`, id)
    .then( (res)=>{
      console.log(res.data)
      loadData();
    })
    .catch( (err) =>{
      console.log(err)
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(update) {
      api.put(`/${update.id}/`, data)
      .then( (res)=>{
        console.log(res.data)
        loadData()
      })

    }
    else{
    api.post(`/`, data)
    .then( (res)=> {
      setData(res.data)
      loadData();
    })
  }

  setData({name: "", role: ""})

  }

  const handleInput = (e)=>{
    const {name, value} = e.target 
    setData({...data, [name]: value})
  }

  const handleUpdate = (dt)=>{
    setUpdate(dt)
    setData(dt)
  }

  return (
    <div>
      
      <center>


        <form onSubmit={handleSubmit}>
          name: <input type="text" name='name' value={data.name} onChange={handleInput} required /><br /><br></br>
          role: <input type="text" name='role' value={data.role} onChange={handleInput} required /><br /><br></br>

          <button>Add</button>
        </form>


        <br></br><br></br>
        <table border = '4'>
          <thead>
            <tr>
              <th>name</th>
              <th>role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <thead>
          {
            form.map( (u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.role}</td>

                <td>
                  <button onClick={ () => handleDelete (u.id)}>Delete</button>
                </td>


                <td>
                  <button onClick={()=> handleUpdate(u)}>Update</button>
                </td>

              </tr>
            ))
          }
          </thead>
        </table>
      </center>
      
    </div>
  )
}

export default App
