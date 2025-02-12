import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Emplopyee = () => {
   // const employee = {name:"Ramesh",gender:"male",salary:100000};
   const [employee,setEmployee] = useState([])
   useEffect(
    ()=>{
      axios.get("http://localhost:9000")
      .then(result=>{
        console.log(result.data)
        setEmployee(result.data)
      })
      .catch(err => console.log(err))
    },
    []
   )

   const handleDelete = (id)=>{

    axios.delete('http://localhost:9000/'+id)
    .then(result => {
      console.log(result)
      window.location.reload()
   })
    .catch(err => console.log(err))

   }
  return (
    <div className='d-flex vh-100 justify-content-center p-3'>
        <div>
        <Link to={'/create'} className='btn btn-success'>Add</Link>
      
      <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {
          employee.map((row)=>

            <tr key={row._id}>
                <td>{row.name}</td>
                <td>{row.gender}</td>
                <td>{row.salary}</td>
                {/* <button className='btn btn-success'>Update</button> */}
                <Link to={`/update/${row._id}`} className='btn btn-success'>Update</Link>
                <button className='btn btn-danger' onClick={()=>handleDelete(row._id)}>Delete</button>
            </tr>

          )
            

          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Emplopyee
