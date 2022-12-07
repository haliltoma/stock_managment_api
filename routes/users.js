const express = require('express');
const { user_create,users_show, user_update, user_delete, user_one,user_delete_all } = require('../Controller/users');
const router = express.Router();

router.get('/show/all',users_show);
router.get('/show/:id',user_one);
router.post('/create',user_create);
router.put('/update/:id',user_update);
router.delete('/delete/:id',user_delete);
router.delete('/delete-all/',user_delete_all);




module.exports=router;