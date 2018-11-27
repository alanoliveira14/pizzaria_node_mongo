var mongoose = require('mongoose');
var db = require('../../database/database');

mongoose.connect(db.url);

var Schema = mongoose.Schema;

var saborSchema = new Schema({
    nome:String,
    descricao:Array,
    categoria:String,
    valor:Number
}, {collection:'sabores', versionKey: false});

module.exports = mongoose.model('saborData',saborSchema);
