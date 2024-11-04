const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes= require('./routes/employeeRoutes')


const app = express()

dotEnv.config()
//to connect the database create in mongodb
app.use(bodyParser.json())

//mongoose is useful to vconnect
mongoose.connect(process.env.MONGO_URI) //take from .env file
.then(()=>{
    console.log("MongoDB Connected Suceesfully")

})
.catch((error)=>{
    console.log("Error",error)

})

//middleware adding
app.use('/employees', employeeRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`server started and running at ${PORT}`)

})