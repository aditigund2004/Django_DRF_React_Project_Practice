import React from 'react'

const ShowData = () => {

    const [form, setForm] = useState([])
    
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
        api.delete(`/${id}`, id)
        .then( (res)=>{
          loadData();
        })
      }

      const handleUpdate = (dt)=>{
    setUpdate(dt)
    setData(dt)
  }

  return (
    <div>
        <center>
            <table border = '4'>
          <thead>
            <tr>
              <th>name</th>
              <th>role</th>
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

export default ShowData
