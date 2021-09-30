const express = require('express');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const ErrorSerializer = require('./src/serializer/ErrorSerializer');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next)=>{
  res.status(404);
  res.json(new ErrorSerializer(404,'Not found'));
});

app.use((err, req, res, next)=>{
  res.status(statusCode);
  res.json (new ErrorSerializer(statusCode, err.message))
});
module.exports = app;
