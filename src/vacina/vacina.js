var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var vacinaSchema = new Schema({
nome: String,
fabricante: String,
validade: String
}, {versionKey: false})
module.exports = mongoose.model("Vacina", vacinaSchema)