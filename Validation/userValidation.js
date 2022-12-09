const Joi  = require('joi')

const userSchema = Joi.object({
    name:Joi.string().min(3).required(),
    last_name:Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(3).max(15).required(),
    password_confirmation: Joi.ref('password'),
    
})

module.exports= userSchema;