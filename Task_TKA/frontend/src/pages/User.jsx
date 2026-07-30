import React, { useEffect, useState } from 'react'
import { api } from '../services'

const User = () => {
  const [data, setData] = useState([])

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

  return (
    <div>
      <center>
        <h3>User Page</h3>
        <table border = '3'>
                <thead>
                    <tr >
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>role</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            data.map( (u) => ( 
                            <tr key = {u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.mobile}</td>
                                <td>{u.role}</td>                     
                            </tr>
                        ))}
                    </tbody>
            </table>
        </center>
    </div>
  )
}
export default User
