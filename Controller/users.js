
const Users = require('../Model/Users');
const Schema = Users.Schema;


const users_show=(req,res)=>{
    const user = new Schema(req.body)
    user
}
const user_create=(req,res)=>{
    res.send(req.body)
    console.log('dasd')
    const user = new Schema(req.body)
    user.save((err,data)=>{
        console.log('dasdas')
        res.send(data)
    })
}
const user_update= (req,res)=>{
    Schema.find('',(err,data)=>{

    })
}
const user_delete= (req,res)=>{
    
}







module.exports = {
    users_show,
    user_create,
}