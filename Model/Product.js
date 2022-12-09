const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        // required:true,
    },
    price:{
        type:Number,
        // required:true,
    },
    image:{
        type:String,
        // required:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }



})


module.exports = mongoose.model('Product', Product)









