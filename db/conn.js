const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Birnale").then(()=>{
    console.log("connected Successfully...");
}).catch((error)=>{
console.log(error);
});

