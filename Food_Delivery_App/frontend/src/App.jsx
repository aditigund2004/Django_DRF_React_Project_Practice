import React, {  useEffect, useState } from 'react'
import { api } from './services'

const App = () => {
  const [food, setFood]= useState([])
  
  const [data, setData] = useState({customerName: '', quntity:'', status:'Preparing', foodistem: '', price:'', paymentmode: 'UPI'})

  const [update, setUpdate] = useState([])


  const [search, setSearch] = useState('')

  const loadData = async() =>{
    await api.get(`/`)
    .then( (res)=>{
      setFood(res.data)
    })
    .catch( (err) =>{
      console.log(err)
    })
  }

  useEffect( ()=>{
    loadData();
  }, [])

  // const handleDelete = async(id)=>{
  //   await api.delete(`/${id}/`)
  //   .then( (res) =>{
  //     loadData();
  //     setFood(res.data)
  //   })
  //   .catch( (err) =>{
  //     console.log(err)
  //   })
  // }

  const handleInput = (e)=>{
    const {name, value} = e.target 
    setData({...data, [name]: value})
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(update){
      await api.patch(`/${update.id}/`, data)
      .then((res)=>{
        setData(res.data)
        loadData()
      })
      .catch( (err) =>{
        console.log(err)
      })

    }else{

    await api.post(`/`, data)
    .then( (res) =>{
      setData(res.data)
      loadData();
    })
    .catch( (err)=>{
      console.log(err)
    })
  }
  }
  const handleUpdate =(dt)=>{
    setData(dt)
    setUpdate(dt)
  }


  const searchData = food.filter((u) =>
    String(u.customerName).includes(search) || 
    String(u.customerName).includes(search)
  )

  return (
    <div>
      <center>
        <h3>Add Data</h3>

        <form onSubmit={handleSubmit}>
          c_name = <input type="text"  name = 'customerName' value={data.customerName} onChange={handleInput} required/> <br /> <br />
          quuntity = <input type="text"  name = 'quntity' value={data.quntity} onChange={handleInput} required/> <br /> <br />
          status = <select name="status" value={data.status} onChange={handleInput}>
            <option value="Preparing">Preparing</option>
            <option value="Delivery">Delivery</option>
          </select>
          <br /> <br />
          food_item = <input type="text"  name = 'foodistem' value={data.foodistem} onChange={handleInput} required/> <br /> <br />
          price = <input type="text"  name = 'price' value={data.price} onChange={handleInput} required/> <br /> <br />

          paymentmode = <select name="paymentmode" value={data.paymentmode} onChange={handleInput}>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
          </select>
          <br /> <br />

          <button>Add Data</button>

        </form>
        <br /> <br />

        Search : <input type="text"  value={search} onChange={(e)=> setSearch(e.target.value)}/>

        <br></br><br></br>



        <br /> <br />

        <h3>Data</h3>
        <table border = '4'>
          <thead>
            <tr>
              <th>C_Name</th>
              <th>Quntity</th>
              <th>Staus</th>
              <th>Food_Item</th>
              <th>Price</th>
              <th>PaymentMode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              searchData.map((u) => ( 
              <tr key={u.id}>
                <td>{u.customerName}</td>
                <td>{u.quntity}</td>
                <td>{u.status}</td>
                <td>{u.foodistem}</td>
                <td>{u.price}</td>
                <td>{u.paymentmode}</td>

                {/* <td>
                  <button onClick={() => handleDelete(u.id)}>Delete</button>
                </td> */}

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
