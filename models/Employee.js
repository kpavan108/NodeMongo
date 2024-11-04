//creating model requreing mongoose to intaract with data base
const mongoose =require('mongoose')

//defining schema variable in which the records to be store
const employeeSchema = new mongoose.Schema({
    //database lo records a propertys tho store avalo  aa properties mention cheyali
    //name,email,phone,city
    name:{
     type:String,
     required:true
    },
    email:{
     type:String,
     required:true
    },
    phone:{
     type:Number,
     default:false
    },
    city:{
     type:String,
     required:true
    }
 })
 
 //export module using module name and schema
 module.exports= mongoose.model('Employee',employeeSchema)