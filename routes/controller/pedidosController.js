var express = require('express');
var router = express.Router();
//var testModel = require('../model/testModel');
var Users = require('../schemas/userSchema');
var Pedidos = require('../schemas/pedidosSchema');

var Test = require('../schemas/testPSchema');

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

    tempo(req.body);

    res.send('100.000 documentos teste inseridos');

});

function tempo(testP){
    for(i = 0; i <100000; i++){
        console.log(i);
        var test = new Test(testP);

        test.save();
    }
}


module.exports = router;

