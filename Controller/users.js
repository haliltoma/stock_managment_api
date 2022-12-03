
const Users = require('../Model/Users');
const Schema = Users.Schema;

const userSchema = Joi.object({
    name:joi.string().min(3).required(),
    last_name:joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
    password_confirmation: joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' }}}),
    relation_ship: Joi.array().items(Joi.object({
        user_roles: Joi.string().min(3),
        user_id: Joi.string(),
        user_mail: Joi.string().mail().required(),
        user_password: Joi.string().password().min(3).max(16).required(),
        user_password_confirmation: Joi.any.valid(Joi.ref('password_confirmation')).required().options({ language: { any: { allowOnly: 'must match password' }}}),

    })),
    product_items: Joi.array().items(Joi.object({
        product_name:Joi.string().min(3).required(),
        product_title:Joi.string().min(3).required(),
        product_category:Joi.string().min(3).required(),
        product_created_at:Joi.date().greater('1-1-1974'),
        product_update_at:Joi.date().greater(Joi.ref('product_created_at')).required(),
        product_info:Joi.array().items(Joi.object({
            info_name:Joi.string().min(3).required(),
            info_content:Joi.string().min(3).required(),
        })).required(),
        product_price:Joi.number().min(3).max(10).required(),
        product_attirubute: Joi.string().min(3).required(),
    })),
    product_categories: Joi.array().items(Joi.object({
        category_name:Joi.string().min(3).required(),
    })).required(),
})

const users_show=(req,res)=>{
    const user = new Schema(req.body)
    Schema.find((err,data)=>{
        res.json(data)
        
    })
}
const user_create=(req,res)=>{
       const valida = userSchema.validate(req.body)

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
    user_update,
    user_delete
}