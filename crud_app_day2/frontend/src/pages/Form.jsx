import React, { useEffect, useState } from 'react'
import { api } from '../service'

const Form = ({added, update}) => {

  const [data, setData] = useState({name: "", age: ""})

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(update){
      api.put(`/${update.id}/`, data)
      .then( (res)=>{
        setData(res.data)
        added(1)
      })

    }
    else{
    api.post(`/`, data)
    .then( (res)=>{
      setData(res.data)
      
    })
    .catch( (err) =>{
      console.log(err)
    })
    setData({name: "", age: ""})
  }
  }
  useEffect(() => {
  if (update) {
    setData(update);
  }
}, [update]);


   const handleInput = (e)=>{
    const {name, value} = e.target
    setData({...data, [name]: value})
  
  }
  return (
    <div>
      <center>
        <form onSubmit = {handleSubmit}>
          <input type="text" name='name' value={data.name} onChange={handleInput} required/><br></br>
          <input type="text"  name = 'age' value={data.age} onChange={handleInput} required/> <br></br>
          <br></br>
          <button>Add</button>
          </form>
      </center>
      
    </div>
  )
}

export default Form
