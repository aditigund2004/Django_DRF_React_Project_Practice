import React, { useState } from 'react'

const GetStudent = () => {
    const [data, setData] = useState([])
    
  return (
    <div>
        <center>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Address</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data.map( (data) => ( 
                        <tr>
                            <td>{data.nam}</td>
                            <td>{data.number}</td>
                            <td>{data.classname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default GetStudent
