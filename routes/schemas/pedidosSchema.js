var mongoose = require('mongoose');
var db = require('../../database/database');

mongoose.connect(db.url);

var Schema = mongoose.Schema;

var itemSchema = new Schema({item:String});

var pedidoSchema = new Schema({
    destinatario:{
        nome:{type:String , required : true},
        telefone:String,
        endereco:String,
        cpf:String,
    },pedido:{
        data:Date,
        entregador:String,
        itensPedidos:[],
        formaPagamento:String,
        pedidoPor:String
    }

}, {collection:'pedidos2', versionKey: false});

module.exports = mongoose.model('pedidosData', pedidoSchema);
