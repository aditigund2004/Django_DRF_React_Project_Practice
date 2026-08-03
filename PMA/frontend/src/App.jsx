import React, { useEffect, useState } from 'react'
import { api } from './services'

const App = () => {

  const [form, setForm] = useState([])
  const [data, setData] = useState({PolicyId: "", PolicyNumber: "", PolicyHolderName: "", PremiumAmount: "", PolicyType: '', CoverageAmount: '', Status: ""})
  const [update, setUpdate] = useState(null)

  const [serach, setSearch] = useState("")

  // category -> radio button veg non veg

  const loadData = async () =>{

    await api.get(`/`)
    .then( (res)=>{
      setForm(res.data)
      console.log(res.data)
    })
    .catch( (err) =>{
      console.log(err)
    })
    
  }

  useEffect( () =>{
    loadData();
  }, [])


  const handleDelete = async(id)=>{
    await api.delete(`/${id}/`)
    loadData();
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(update){
      await api.put(`/${update.id}/`, data)
      .then( (res) =>{
        loadData();
        setUpdate(null)
      })

    }else{
    await api.post(`/`, data)
    .then( (res)=>{
      loadData()
    })
  }
  setData({PolicyId: "", PolicyNumber: "", PolicyHolderName: "", ptype: "", PremiumAmount: '', CoverageAmount: '', Status: ""})

  }

  const handleInput = (e)=>{
    const {name, value} = e.target
    setData({...data, [name]: value})
  }
  
  const handleUpdate =(dt)=>{
    setData(dt)
    setUpdate(dt)
  }

  // const search = async () => {
  //   const all = await data.filter((u) => u.PolicyId && data.PolicyId)
  //   if(!all){
  //     // setSearch(serach)

  //   }
  //   else{
  //     alert("not found")
  //   }
  // }


  // const serachallData = form.filter( (p) =>
  //   String(p.PolicyId).includes(serach) || String(p.PolicyNumber.includes(serach))
  // )

  const searchAllData = form.filter((p) =>
  String(p.PolicyId).includes(serach) ||
  String(p.PolicyNumber).includes(serach)
);
  return (
    <div>
      <center>

        
        <h2>Alll Data </h2>

        <form onSubmit={handleSubmit}>

          pid : <input type="text" name="PolicyId" value={data.PolicyId} onChange={handleInput} required/> <br></br><br></br>
          pno : <input type="text" name="PolicyNumber" value={data.PolicyNumber} onChange={handleInput} required/> <br></br><br></br>
          pname : <input type="text" name="PolicyHolderName" value={data.PolicyHolderName} onChange={handleInput} required/> <br></br><br></br>
          ptype : <input type="text" name="PolicyType" value={data.PolicyType} onChange={handleInput} required/> <br></br><br></br>
          preamount : <input type="text" name="PremiumAmount" value={data.PremiumAmount} onChange={handleInput} required/> <br></br><br></br>
          coveamount : <input type="text" name="CoverageAmount" value={data.CoverageAmount} onChange={handleInput} required/> <br></br><br></br>
          status : <input type="text" name="Status" value={data.Status} onChange={handleInput} required/> <br></br><br></br>

          <button> Add Data</button>
        </form>
        <br></br> <br></br>


        serach by Id : <input type="text" value={serach} onChange={(e) => setSearch(e.target.value)} />
         <br /><br />

          {/* <button>Search</button>
          <br /><br /> */}



        <h3>PMA</h3>

        <table border = '4'>
          <thead>
            <tr>
              <th>PolicyID</th>
              <th>PolicyNumber</th>
              <th>PolicyHolderNAME</th>
              <th>PolicyType</th>
              <th>PremioumAmount</th>
              <th>CoverageAmount</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              searchAllData.map( (u) => (  
              <tr key={u.id}>
                <td>{u.PolicyId}</td>
                <td>{u.PolicyNumber}</td>
                <td>{u.PolicyHolderName}</td>
                <td>{u.PolicyType}</td>
                <td>{u.PremiumAmount}</td>
                <td>{u.CoverageAmount}</td>
                <td>{u.Status}</td>
                <td>
                  <button onClick={() => handleDelete(u.id)}>Delete</button>
                </td>

                <td>
                  <button onClick={() => handleUpdate(u)}>Update</button>
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
