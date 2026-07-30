import React, { useEffect, useState } from 'react'
import { api } from '../services'

const AddData = ({added, update}) => {
    const [data, setData] = useState({name: "", age: ""})

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(update){
            api.put(`/${update.id}/`, data)
            .then( (res)=>{
                console.log(res.data)
                setData(res.data)
                added(1)
            })


        }else{
        api.post(`/`, data)
        .then( (res)=>{
            console.log(res.data)
            setData(res.data)
            added(1)
        })
    }
    }

    useEffect( ()=>{
        if(update){
            setData(update)
        }
    },[update])

    const handleInput = (e)=>{
        const {name, value}= e.target 
        setData({...data, [name]: value})
    }
    

  return (
    <div>
        <center>

            <form onSubmit={handleSubmit}>
                name : <input type="text" name = 'name' value={data.name} onChange={handleInput} required/><br></br><br></br>
                age : <input type="text" name = 'age' value={data.age} onChange={handleInput} required/><br></br><br></br>

                <button>Add</button>
            </form>



        </center>
      
    </div>
  )
}

export default AddData
