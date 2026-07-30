import React, { use, useState } from 'react'
import Form from './pages/Form'
import Show from './pages/Show'

const App = () => {

  const [accept, setAccept] = useState(null)

  const [update, setUpdate] = useState(null)

  const handleUpdate = (item) => {
  setUpdate(item);
  };
  
  return (
    <div>
      <center>
        <h2>Hello</h2>

        <Form added={(e)=>{ setAccept(e+1)}} update={update}/>

        <Show accept = {accept} handleUpdate={handleUpdate}/>
      </center>
      
    </div>
  )
}

export default App
