const Joi  = require('joi')

const userSchema = Joi.object({
    name:Joi.string().min(3).required(),
    last_name:Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(3).max(15).required(),
    password_confirmation: Joi.ref('password'),
    relation_ship: Joi.array().items(Joi.object({
        user_roles: Joi.string().min(3),
        user_id: Joi.string(),
        user_mail: Joi.string().email().required(),
        user_password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(3).max(16).required(),
        user_password_confirmation: Joi.ref('user_password'),

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

module.exports= userSchema;