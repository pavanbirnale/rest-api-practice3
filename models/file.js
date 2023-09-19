const mongoose = require("mongoose");
const list = new mongoose.Schema({
     name:{
    type: String,
    required: true
},
 
email:{
    type: String,
    required: true
},
phone:{
    type: Number,
    required: true
},
work: {
    type: String,
    required: true
},
password: {
    type : String,
    required: true
},
cpassword: {
    type : String,
    required: true
}})
   

const student= new mongoose.model('student',list);

module.exports = student;