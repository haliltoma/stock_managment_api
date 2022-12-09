const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Category = new Schema({
    title:{
        type:String,
        required:true,
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }



})


module.exports = mongoose.model('Category', Category)









