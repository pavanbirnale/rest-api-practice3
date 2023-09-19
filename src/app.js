const express = require("express")
const app = express();
const student = require("../models/file")
const port = process.env.PORT || 3000;
require("../db/conn");
const router = require("../routers/student")
app.use(express.json());

app.use(router);






app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);
})