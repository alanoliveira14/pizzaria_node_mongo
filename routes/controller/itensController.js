var express = require('express');
var router = express.Router();
//var testModel = require('../model/testModel');
var Users = require('../schemas/itemSchema');


router.get('/', function (req, res) {
    var contatos = Users.find({nome:"Teste"}, function (error, users) {
        if(error)
            throw error;
        else
            res.send(JSON.stringify(users));
    })
});


router.post('/' ,function (req, res) {

    var data = new Users(req.body);

    var hue = data.save(function (err, user) {
        if(err)
            res.send(JSON.stringify("Impossível cadastrar no banco, favor verificar o JSON enviado!"));
        else
            res.send(JSON.stringify("Usuário " + user.nome + "cadastrado com sucesso!"));
    });

});

router.get('/one', function (req, res) {
    var findOne = Users.findOne({nome:"Teste"},function (error, user) {
        if (error)
            throw error;
        else {
            res.send(user);
        }
    })
});

module.exports = router;

