// import React, { useState } from 'react'
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'


// const CreateEmployee = () => {
//    const [name ,setName] = useState('')
//    const [gender,setGender] = useState('')
//    const [salary,setSalary] = useState('')
//    const navigate = useNavigate()

//    const handleSubmit = (e)=>{
//     e.preventDefault()
//     axios.post("http://localhost:9000/CreateEmployee",{name,gender,salary})
//     .then(result=>{
//       console.log(result)
//       navigate('/')
//     }
//     )
//     .catch(err => console.log(err))

//    }
//   return (
//     <div>
//       <div className="d-flex vh-100 justify-content-center">
//         <form action="" onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <label 
//                 htmlFor="EmployeeName" 
//                 className="form-label">Employee Name</label>
//                 <input 
//                 type="text" 
//                 className="form-control" 
//                 id="EmployeeName" 
//                 placeholder="Enter employee name"
//                 onChange={(e)=>setName(e.target.value)}
//                 />
//             </div>
//             <div className="mb-3">
//                 {/* <label for="EmployeeGender" className="form-label">Employee Gende</label>
//                 <input type="text" className="form-control" id="EmployeeGende" placeholder=""/> */}
//                 <div className="form-check">
//                     <input 
//                     type="radio" 
//                     className="form-check-input"
//                      name='gender'
//                      onChange={()=>setGender('M')} 
//                      id='male'
//                      />
//                     <label htmlFor="male" className="form-check-label">Male</label>
//                 </div>
//                 <div className="form-check">
//                     <input 
//                     type="radio" 
//                     className="form-check-input" 
//                     name='gender' 
//                     onChange={()=>setGender('F')}
//                     id='female'/>
//                     <label htmlFor="female" className="form-check-label">Female</label>
//                 </div>
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="EmployeeSalary" className="form-label">Employee Salary</label>
//                 <input 
//                 type="text" 
//                 className="form-control" 
//                 id="EmployeeSalary" 
//                 placeholder=" Enter salary"
//                 onChange={(e)=>setSalary(e.target.value)}
//                 />
//             </div>
//             <button className="btn btn-primary">Create</button>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default CreateEmployee


import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateEmployee = () => {
   const [name, setName] = useState('')
   const [gender, setGender] = useState('')
   const [salary, setSalary] = useState('')
   const navigate = useNavigate()

   const handleSubmit = (e) => {
     e.preventDefault()
     axios.post("http://localhost:9000/CreateEmployee", { name, gender, salary })
       .then(result => {
         console.log(result)
         navigate('/')
       })
       .catch(err => console.log(err))
   }

   return (
     <div>
       <div className="d-flex vh-100 justify-content-center">
         <form action="" onSubmit={handleSubmit}>
           <div className="mb-3">
             <label htmlFor="EmployeeName" className="form-label">Employee Name</label>
             <input 
               type="text" 
               className="form-control" 
               id="EmployeeName" 
               placeholder="Enter employee name"
               value={name}
               onChange={(e) => setName(e.target.value)}
             />
           </div>
           <div className="mb-3">
             <div className="form-check">
               <input 
                 type="radio" 
                 className="form-check-input"
                 name='gender'
                 onChange={() => setGender('Male')} 
                 id='male'
               />
               <label htmlFor="male" className="form-check-label">Male</label>
             </div>
             <div className="form-check">
               <input 
                 type="radio" 
                 className="form-check-input" 
                 name='gender' 
                 onChange={() => setGender('Female')}
                 id='female'
               />
               <label htmlFor="female" className="form-check-label">Female</label>
             </div>
           </div>
           <div className="mb-3">
             <label htmlFor="EmployeeSalary" className="form-label">Employee Salary</label>
             <input 
               type="text" 
               className="form-control" 
               id="EmployeeSalary" 
               placeholder=" Enter salary"
               value={salary}
               onChange={(e) => setSalary(e.target.value)}
             />
           </div>
           <button className="btn btn-primary">Create</button>
         </form>
       </div>
     </div>
   )
}

export default CreateEmployee

