const { mongoose } = require("../config/db")

let logic=(req,res)=>{
    const newBatch = mongoose.model('info', { info: Object });
    const myinfo = new newBatch({ info: {
        msg:{
            info:req.query.details,
            name:req.body.name,
            city:req.body.city,
            phoneno:req.body.phoneNo
        }
    } });
    myinfo.save().then(() => console.log('done'));
    res.json({
      msg:{
          info:req.query.details,
          name:req.body.name,
          city:req.body.city,
          phoneno:req.body.phoneNo
      }
    })
  }

module.exports={logic}