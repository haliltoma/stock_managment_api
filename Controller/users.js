
const Users = require('../Model/Users');
const userSchema = require('../Validation/userValidation')


// All User show 
const users_show=(req,res)=>{
    Users.find({},(err,data)=>{
        res.json(data);
    })
}
// Only one user show
const user_one=(req,res)=>{
    const search = req.params.id
    console.log(search)
    // res.send(req.params.id)
    Users.findById(search,(err,data)=>{
        res.json(data);
    })
}

// User generater 
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
    console.log(err)
})   
    console.log(usersValidate)   
}


// One User Update
const user_update= (req,res)=>{
    const usersValidate= userSchema.validate(req.body);
    if(userSchema.validate(req.body).error){
        console.log('dasdsa')
        return res.send(userSchema.validate(req.body).error.details[0].message)
    }
    Users.findOneAndUpdate({_id:req.params.id},usersValidate.value,(err,data)=>{
        if(err){
                    return console.log(err)}
            console.log(data,'basarili guncelleme')
    })
    Users.findById(req.params.id,(err,data)=>{
        res.send(data)
    })

}

// One User Delete
const user_delete= (req,res)=>{
    const params = req.params.id;
    console.log(params)
    Users.deleteOne({_id:params}, (err,data)=>{
        console.log(params)
        res.send(data);
    })
}
// All Users Delete
const user_delete_all = (req, res) => {
    Users.remove({}, (err, data) => {
        console.log(err)
        res.send(`Toplamda Silinen Kullanici Sayisi ${data.deletedCount} dir`);
    });
}







module.exports = {
    users_show,
    user_create,
    user_update,
    user_delete,
    user_one,
    user_delete_all
}