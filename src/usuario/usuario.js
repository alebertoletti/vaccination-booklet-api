var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome: String,
    dataNascimento: String,
    sexo: String
}, {versionKey: false})

module.exports = mongoose.model("Usuario", usuarioSchema)