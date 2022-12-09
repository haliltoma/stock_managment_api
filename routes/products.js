const express = require('express');
const { index,show, store, update, destroy } = require('../Controller/ProductController');
const router = express.Router();

router.get('/',index); //users_show
router.post('/',store); //user_create
router.get('/:id',show); // user_one
router.put('/:id',update);
router.delete('/:id',destroy);





module.exports=router;