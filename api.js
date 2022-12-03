const express = require('express');	
const router = express.Router();

const app = express();

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello wr ");

})

app.listen(process.env.PORT || 3000,()=>{
    console.log('hello starting')
})
