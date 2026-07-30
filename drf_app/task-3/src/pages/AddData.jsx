import React from 'react'

const AddData = () => {

    
      const [data, setData] = useState({name: "", role: ""})
      

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
    
  return (
    <div>
        <center>
        <form onSubmit={handleSubmit}>
          name: <input type="text" name='name' value={data.name} onChange={handleInput} required /><br /><br></br>
          role: <input type="text" name='role' value={data.role} onChange={handleInput} required /><br /><br></br>

          <button>Add</button>
        </form>
        </center>
      
    </div>
  )
}

export default AddData
