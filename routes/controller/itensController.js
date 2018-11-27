var express = require('express');
var router = express.Router();
//var testModel = require('../model/testModel');
var Itens = require('../schemas/itemSchema');
var Sabores = require('../schemas/saborSchema');

router.get('/', function (req, res) {
    var findAll = Itens.find(function (error, itens) {
        if(error)
            throw error;
        else
            res.send(JSON.stringify(itens));
    })
});


router.post('/' ,function (req, res) {

    var data = new Itens(req.body);

    var hue = data.save(function (err, item) {
        if(err)
            res.send(JSON.stringify("Impossível cadastrar no banco, favor verificar o JSON enviado!"));
        else
            res.send(JSON.stringify("Item " + item.nome + " cadastrado com sucesso!"));
    });

});

router.get('/one', function (req, res) {
    var findOne = Itens.findOne({nome:"Teste"},function (error, user) {
        if (error)
            throw error;
        else {
            res.send(user);
        }
    })
});


router.post('/sabores' ,function (req, res) {

    var data = new Sabores(req.body);

    var hue = data.save(function (err, sabor) {
        if(err)
            res.send(JSON.stringify("Impossível cadastrar no banco, favor verificar o JSON enviado!"));
        else
            res.send(JSON.stringify("Sabor " + sabor.nome + " cadastrado com sucesso!"));
    });

});

router.get('/sabores', function (req, res) {
    var findAll = Sabores.find(function (error, sabores) {
        if(error)
            throw error;
        else
            res.send(JSON.stringify(sabores));
    })
});


module.exports = router;

