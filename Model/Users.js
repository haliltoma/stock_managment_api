const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Users = new Schema({
    'name':{
        type:'string',

    },
    'last_name':{
        type:'string',
    },
    'email':{
        type:'string',
    },
    'password':{
        type:'string',
    },
    'relation_ship':[{
        'user_roles':{type:'string'},
        'user_id':{type:'string'},
        'user_email':{type:'string'},
        'user_password':{type:'string'},
    }],
    'product_items':[{
        'product_name':{type:'string'},
        'product_title':{type:'string'},
        'product_category':{type:'string'},
        'product_created_at':{type:'string'},
        'product_update_at':{type:'string'},
        'product_info':[{
            'info_name':{type:'string'},
            'info_content':{type:'string'}
        }],
        'product_price':{type:'number'},
        'product_attirubute':{type:'string'},
    }],
    'product_category':[{
        'category_name':{type:'string'},
    }]
})


module.exports= mongoose.model('Stock_Users',Users);