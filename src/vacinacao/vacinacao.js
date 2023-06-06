var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var vacinacaoSchema = new Schema(
  {
    lotedose: String,
    datavacinacao: String,
    proximadose: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model("Vacinacao", vacinacaoSchema);
