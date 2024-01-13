const mongoose=require("mongoose")
require('dotenv').config()
mongoose.connect('mongodb+srv://'+process.env.USER_NAME+':'+process.env.PASSWORD+'@cluster0.k3h4jot.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected")
}).catch(()=>{
    console.log("err")
})

module.exports={mongoose}
