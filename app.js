

const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const users = require('./routes/users');
const categories = require('./routes/categories');
const products = require('./routes/products');

const mongoose = require('mongoose')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://tomy27k:159753123h@schefingcluster.ll47xdd.mongodb.net/Stock')
.then(()=>console.log('connect to MongoDB'))
.catch(()=>console.log('Not Working on MongoDB'));
app.use(cors());

app.use('/api/users',users)
app.use('/api/categories',categories)
app.use('/api/products',products)



app.use('/',(req,res)=>res.send('connection'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.listen(process.env.PORT || 3000,()=>{
  console.log('hello starting')
})



module.exports = app;
