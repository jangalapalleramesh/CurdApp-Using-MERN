require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Employee = require('./models/Employee')
const connectionString = process.env.MONGODB_URI;
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT | 9000

mongoose.connect(connectionString)
const con = mongoose.connection
con.on('open',()=>console.log('connected!!!!'))
//get api call
app.get('/',(req,res)=>{
    Employee.find({})
    .then((employee => res.json(employee)))
    .catch(err =>res.json(err))
})

app.get('/getEmployee/:id',(req,res)=>{
    const id = req.params.id;
    Employee.findById({_id:id})
    .then((employee => res.json(employee)))
    .catch(err =>res.json(err))
})

// put api call

app.put('/updateEmployee/:id',(req,res)=>{
    const id = req.params.id;
    Employee.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        gender:req.body.gender,
        salary:req.body.salary
    })
    .then((employee => res.json(employee)))
    .catch(err =>res.json(err))
})

//DELETE API CALL

app.delete('/:id',(req,res)=>{
    const id = req.params.id;
    Employee.findByIdAndDelete({_id:id})
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})

//post api call
app.post('/CreateEmployee',(req,res)=>{
    Employee.create(req.body).then(result=>console.log(result)).catch(err=>console.log(err))

})

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))