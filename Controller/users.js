
const Users = require('../../Model/Users');
const userSchema = require('../../validation/userValidation')

const users_show=(req,res)=>{
    const user = new Schema(req.body)
    Schema.find((err,data)=>{
        res.json(data)
        
    })
}
const user_create=(req,res)=>{
if(userSchema.validate(req.body).error){
   return res.send(userSchema.validate(req.body).error.details[0].message)
}
const usersValidate= userSchema.validate(req.body);
const user = new Users(usersValidate.value)
console.log(user)
user.save((err,data)=>{
    if(err){
        return console.log(err)
    }else{
        res.send(data)
    }
})
    
       
    console.log(usersValidate)
    
    
}
const user_update= (req,res)=>{
    // Schema.find('',(err,data)=>{
        
    // })
}
const user_delete= (req,res)=>{
    
}







module.exports = {
    users_show,
    user_create,
    user_update,
    user_delete
}