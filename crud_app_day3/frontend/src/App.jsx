import React, { use, useState } from 'react'
import ShowData from './pages/ShowData'
import AddData from './pages/AddData'


const App = () => {
  // const [accept, setAccept] = useState(0)
  // const [update, setUpdate] = useState(null)

  // const handleUpdate = (dt)=>{
  //   setUpdate(dt)
  // }
  return (
    <div>
      
      <center> 
        {/* <AddData added={ (e) => setAccept(e+1)} update={update}/> */}
        
{/* added={accept} handleUpdate={handleUpdate} */}
        
        <ShowData />
      </center>
    </div>
  )
}

export default App
