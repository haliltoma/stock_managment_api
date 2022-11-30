const express = require('express');
const { user_create } = require('../Controller/users');
const router = express.Router();

// router.get('/',homeGet)
router.post('/post',user_create);
// router.put('/',homeUpdate)
// router.delete('/',homeDelete)
module.exports=router;