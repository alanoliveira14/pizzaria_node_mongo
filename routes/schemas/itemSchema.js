var mongoose = require('mongoose');
var db = require('../../database/database');

mongoose.connect(db.url);

var Schema = mongoose.Schema;

var saborSchema = require('../schemas/saborSchema');

var itemSchema = new Schema({
    nome:{type: String, required : true},
    valor:Number,
    descricao:String,
    tipoItem:String
}, {collection:'itens', versionKey: false});

module.exports = mongoose.model('itemData', itemSchema);
