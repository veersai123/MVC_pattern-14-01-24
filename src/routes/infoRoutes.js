const express=require("express")
const { logic } = require("../controllers/controller")
const app=express()
const infoRouter=express.Router()


infoRouter.post('/',logic)
module.exports={infoRouter}