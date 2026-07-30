import React, { useEffect, useState } from 'react'
import { api } from '../services'

const ShowData = ({ added ,handleUpdate}) => {
    const [form, setForm] = useState([])

    const loadData = ()=>{
        api.get(`/`)
        .then( (res)=>{
            console.log(res.data)
            setForm(res.data)
        })
    }

    useEffect( () =>{
        loadData();
    }, [added])

    // const handleDelete = (id)=>{
    //     api.delete(`/${id}/`)
    //     .then( (res )=>{
    //         console.log(res.data)
    //         loadData();
    //     })
    //      .catch((err) => {
    //   console.error(err);
    // });
    // }
  return (
    <div>
        <center>
            <table border = '3'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        form.map( (u)=> ( 
                        <tr  key = {u.id}>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                            {/* <td>
                                <button onClick={() => handleDelete(u.id)}>Delete</button>
                            </td>

                            <td>
                                <button onClick={ () => handleUpdate(u)}> Update</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default ShowData
