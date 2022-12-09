const express = require('express');
const Category = require('../Model/Category');
const Product = require('../Model/Product');
/*
    index 
    */
const index = (req, res) => {
    Category.find({}, (err, data) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        return res.status(200).json(data);});

};

/*
    Store 
    */
const store = (req, res) => {
    const category = new Category(req.body);
    category.save((err,data)=>{
        if(err) return res.status(500).send(err);
        return res.status(201).send('Successfully created');
        
    })

};

/*
    Show 
    */
const show = (req, res) => {
     Product.find({category:req.params.id}, (err, data)=>{
         console.log(err)
        if(err) return res.status(500).json({
            error: err})
           return res.status(200).json(data);
     }).populate('category');
};

/*
    Update 
    */
const update = (req, res) => {
     Product.findOneAndUpdate({category:req.params.id}, req.body, (err, data)=>{
         if(err) return res.status(500).json({
            error: err})
           return res.status(204).json('Updated');})
};

/*
    Destroy  
    */
const destroy = async (req, res) => {
  try{
    const category = await Category.findByIdAndDelete(req.params.id)
    if(!category) return res.status(404).json('not found')
    return res.status(204).json('success');
  }
  catch(err){
    return res.status(404).json({
          error: err})
    
  }
};

/*
    Destroy All 
    */




module.exports={
    index,
    store,
    show,
    update,
    destroy,
};