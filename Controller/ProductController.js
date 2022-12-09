const express = require("express");
const Product = require("../Model/Product");
/*
    index 
    */
const index = (req, res) => {
  Product.find({}, (err, data) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    return res.status(200).json(data);
  }).populate('category');
};

/*
    index 
    */
const store = (req, res) => {
  const product = new Product(req.body);
  product.save((err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json('Successfully Created Product');
  });
};

/*
    index 
    */
const show = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(data);
    });
};

/*
    index 
    */
const update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }})

};

/*
    index 
    */
const destroy = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(data);})
};

/*
    index 
    */

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
};
