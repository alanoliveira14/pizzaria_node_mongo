var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var userSchema = require('./routes/schemas/userSchema');
var pedidoSchema = require('./routes/schemas/pedidosSchema');

var userRouter = require('./routes/controller/usersController');
var pedidosRouter = require('./routes/controller/pedidosController');
var itensRouter = require('./routes/controller/itensController');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/users', userRouter);
app.use('/pedidos', pedidosRouter);
app.use('/itens', itensRouter);
module.exports = app;
