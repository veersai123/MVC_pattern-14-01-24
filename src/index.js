const express=require("express")
const app=express()

const { infoRouter } = require("./routes/infoRoutes")
require('dotenv').config()
app.use(express.json())


app.use('/info/student',infoRouter)
app.use('/info/teacher',infoRouter)

let port=process.env.PORT
app.listen(port,()=>{
    console.log("server is runnig on",port)
})