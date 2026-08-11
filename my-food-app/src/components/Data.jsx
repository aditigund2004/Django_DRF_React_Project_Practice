import React, { useEffect, useState } from 'react'
import { api } from '../apiServices'

const Data = () => {

    const [data, setData] =useState([])

    const [form, setForm] = useState({name: '', quantity: ''})

    // const loadData =() =>{
    //     api.get(`/`)
    //     .then( (res) =>{
    //         setData(res.data)
    //     })
    //     .catch( (err) =>{
    //         console.log(err)
    //     })
    // }

    useEffect( ()=>{
        api.get(`/`)
        .then( (res) =>{
            setData(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })

    }, [data])
    

    const handleSubmit = (e)=>{
        e.preventDefault()

        api.post(`/`, form)
        .then( (res)=>{
            setForm(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }
  return (
    <div>
        <center>

            <form onSubmit={handleSubmit}>
                name : <input type="text" name="name"  value={form.name} onChange={(e)=> setForm({...form, [e.target.name]: e.target.value})} required /> <br /> <br />
                quntity : <input type="text" name="quantity"  value={form.quantity} onChange={(e)=> setForm({...form, [e.target.name]: e.target.value})} required /> <br /> <br />

                <button>Add</button>
            </form>


            <table border = '2'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (u)=> ( 
                            <tr key = {u.id}>
                                <td>{u.name}</td>
                                <td>{u.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </center>
      
    </div>
  )
}

export default Data
