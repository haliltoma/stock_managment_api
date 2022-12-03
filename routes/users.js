const express = require('express');
const { user_create,users_show } = require('../Controller/users');
const router = express.Router();

router.get('/',users_show)
router.post('/post',user_create);
// router.put('/',homeUpdate)
// router.delete('/',homeDelete)
module.exports=router;