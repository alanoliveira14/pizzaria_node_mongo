var mongoose = require('mongoose');
var db = require('../../database/database');

mongoose.connect(db.url);

var Schema = mongoose.Schema;

var testSchema = new Schema({
    nome1:String,
    nome2:String,
    materia:String,
    tema:String
}, {collection:'testPerformance', versionKey: false});

module.exports = mongoose.model('testSchema',testSchema);
