import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

const UpdateEmployee = () => {
  const {id} = useParams()
  const [name ,setName] = useState('')
  const [gender,setGender] = useState('')
  const [salary,setSalary] = useState('')

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:9000/getEmployee/'+id).
    then(
      (result => {
        // console.log(result)
        setName(result.data.name)
        setGender(result.data.gender)
        setSalary(result.data.salary)
      })
    ).catch(err => console.log(err))
  }

  ,[])

  const handleSubmit = (e)=>{

    e.preventDefault()
    axios.put('http://localhost:9000/updateEmployee/'+id,{name,gender,salary}).
    then(result => {
      console.log(result)
      navigate('/')
  }).
    catch(err => console.log(err))

  }
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center">
        <form action="" on onSubmit={handleSubmit}>
            <h1>Update Employee</h1>
            <div className="mb-3">
                <label htmlFor="EmployeeName" className="form-label">Employee Name</label>
                <input type="text" 
                className="form-control" 
                id="EmployeeName" 
                placeholder="Enter employee name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                {/* <label for="EmployeeGender" className="form-label">Employee Gende</label>
                <input type="text" className="form-control" id="EmployeeGende" placeholder=""/> */}
                <div className="form-check">
                    <input 
                    type="radio" 
                    className="form-check-input" 
                    name='gender' 
                    id='male'
                    checked={gender==='M'?true:false}
                    onChange={(e) => setGender('M')}
                    />
                    <label htmlFor="male" className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                    <input 
                    type="radio" 
                    className="form-check-input" 
                    name='gender' 
                    id='female'
                    checked={gender==='F'?true:false}
                    onChange={(e) => setGender('F')}
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
                onChange={(e)=>setSalary(e.target.value)}
                />
            </div>

            <button className="btn btn-primary">Update</button>
        </form>

      </div>
      
    </div>
  )
}

export default UpdateEmployee
