var express = require('express');
var router = express.Router();
//var testModel = require('../model/testModel');
var Users = require('../schemas/userSchema');
var Pedidos = require('../schemas/pedidosSchema');

router.post('/', function(req, res) {

    var pedido = new Pedidos(req.body);

    pedido.save();

    res.send(JSON.stringify("Pedido inserido com sucesso! " +
                            "Quantidade total de itens: " + req.body.pedido.itensPedidos.length));

});

router.get('/', function (req, res) {
    var findAll = Pedidos.find(function (err, pedidos) {
        if (err)
            res.send(JSON.stringify("Impossível achar pedidos"));
        else
            res.send(JSON.stringify(pedidos));
    })
})

router.post('/a', function (req, res) {

    var pedido = new Pedidos(req.body);

    tempo(req.body);

    res.send('abc');

});

function tempo(pedidow){
    for(i = 0; i <10; i++){
        console.log(i);
        var pedido = new Pedidos(pedidow);

        pedido.save();
    }
}


module.exports = router;

