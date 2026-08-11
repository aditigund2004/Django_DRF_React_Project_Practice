import React, { useState } from 'react'

const ShowData = () => {
  const [data, setData] = useState({name: '', age: '', games : []})

//   setData is used whenever you want to update this state.

//   const games = []

  const handleSubmit = (e)=>{
    e.preventDefault()
    // Stops the page from refreshing.
    // Normally HTML forms reload the page.
    // React applications usually prevent that.
    console.log(data)
    setData({name: '', age: '', games : []})

  }

  const handleCheckbox = (e)=>{
    const {value, checked} = e.target;


    if(checked){
        setData({...data, games: [...data.games, value]})
        // The spread operator copies all existing games.

    }else{
        setData({...data, games: [...data.games.filter( (g)=> g!= value)]})
        // data.games.filter((g)=> g != value) -> keeps everything except "football".
    }

  }
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" name = 'name' value={data.name} onChange={(e)=> setData({...data, [e.target.name]: e.target.value})} required /> <br /> <br />
                Age : <input type="text" name = 'age' value={data.age} onChange={(e)=> setData({...data, [e.target.name]: e.target.value})} required /> <br /> <br />

                Games : <br /> <br />

                      <input type="checkbox" name='games' value='cricket' onChange={handleCheckbox} checked={data.games.includes('cricket') } /> Cricket <br /> <br />
                       <input type="checkbox" name='games' value='tennis' onChange={handleCheckbox} checked={data.games.includes('tennis') } /> Tennis <br /> <br />
                       <input type="checkbox" name='games' value='football' onChange={handleCheckbox} checked={data.games.includes('football') } /> football <br /> <br />

                <button>Add Data</button>

            </form>
        </center>
      
    </div>

  )
}

export default ShowData


// React controls it → Controlled Component
// The browser (DOM) controls it → Uncontrolled Component
