var mongoose = require('mongoose');
var db = require('../../database/database');
mongoose.connect(db.url);

var Schema = mongoose.Schema;

var userScherma = new Schema({
    nome:{type:String , required : true},
    telefone:String,
    endereco:String,
    cpf:String,
}, {collection:'usuarios', versionKey: false});

module.exports = mongoose.model('userData', userScherma);
