var express = require('express');
var router = express.Router();
//var testModel = require('../model/testModel');
var Users = require('../schemas/userSchema');
var Pedidos = require('../schemas/pedidosSchema');

router.post('/', function(req, res) {

    var pedido = new Pedidos(req.body);

    pedido.save();

    res.send(JSON.stringify("Pedido inserido com sucesso! " +
                            "Quantidade todal de itens: " + req.body.pedido.itensPedidos.length));

});

module.exports = router;

