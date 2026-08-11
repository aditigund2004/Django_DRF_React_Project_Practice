import React, { useRef, useState } from 'react'
import Data from './components/Data'
// import ShowData from './components/ShowData'

const App = () => {
 
  // // const inputref = useRef();
  // const  [name, setName]= useState('')

  // const handleSubmit = ()=>{
  //   // console.log(inputref.current.value);
  //   // inputref.current.focus()
  //   // console.log(inputref)
  //   console.log(name)
  // };

  return (
    <div>      
     <center>

     {/* <ShowData/> */}
     {/* <div> */}
      {/* <input type="text" ref={inputref} /> <br /> <br /> */}
      {/* <input type="text"  onChange={(e)=> setName({...name, [e.target.name]: e.target.value})}/> <br /> <br />
      <button onClick={handleSubmit}>submit</button>
     </div> */}

     <Data/>


     </center>
    </div>
  )
}

export default App


// import { useRef } from "react";

// function App() {
//   const count = useRef(0);

//   const handleClick = () => {
//     count.current++;
//     console.log(count.current);
//   };

//   return <button onClick={handleClick}>Click</button>;
// }

// export default App