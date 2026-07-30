// import React, { useState } from 'react'
// import { api } from '../services'
// import AdminDashboard from './AdminDashboard'
// import UserDashboard from './UserDashboard'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const [login, setLogin] = useState({name: "", password: ""})
//     // const [role, setRole] = useState("")
//     const nevigate = useNavigate();

//     const handleLogin = async (e)=>{
//         e.preventDefault()
//         console.log(login)

//         const user = await api.get(`/`)

//         const all = user.data.find( (u)=> u.name == login.name && u.password == login.password)

//     //     if(all.role == 'admin'){
//     //         setRole("admin")
//     //     }else if(all.role == "user"){
//     //         setRole("user")
//     //     }else {
//     //         setRole("invalid user")
//     //     }
//     // }

//     if(!all){
//         alert("invalid user and password")
//         return ;
//     }

//     if(all.role == 'admin'){
//         // return <AdminDashboard/>
//         nevigate("admin")
//     }else if(all.role == "user"){
//         // return <UserDashboard/>
//         nevigate("userDa")
//     }
//     // else if(role == "invalid"){
//     //     return <h2>{"invalid role"}</h2>
//     else{
//         alert ("invali role")
//     }
// }
//     const handleInput = (e)=>{
//         setLogin({...login, [e.target.name]: e.target.value})
//     }   
//   return (
//     <div>
//         <center>
//             <form onSubmit={handleLogin}>

//                 name : <input type="text"  name = "name" value={login.name} onChange={handleInput} required /><br></br><br />
//                 password : <input type="text"  name = "password" value={login.password} onChange={handleInput} required /><br></br><br />
//                 {/* role : <input type="text"  name = "role" value={login.role} onChange={handleInput} required /><br></br><br /> */}

//                 <button> Login here</button>
//             </form>
//         </center>
      
//     </div>
//   )
// }

// export default Login
