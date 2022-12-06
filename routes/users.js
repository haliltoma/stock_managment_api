const express = require('express');
const { user_create,users_show, user_update, user_delete } = require('../app/Controller/users');
const router = express.Router();

router.get('/show',users_show)
router.post('/create',user_create);
router.put('/',user_update)
router.delete('/',user_delete)


module.exports=router;