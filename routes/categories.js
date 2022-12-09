const express = require('express');
const router = express.Router();

const CategoryController = require('../Controller/CategoryController');


router.get('/',CategoryController.index); //users_show
router.post('/',CategoryController.store); //user_create
router.get('/:id',CategoryController.show); // user_one
router.put('/:id',CategoryController.update);
router.delete('/:id',CategoryController.destroy);



module.exports=router;