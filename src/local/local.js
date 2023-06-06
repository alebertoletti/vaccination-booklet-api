var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var localSchema = new Schema(
  {
    cidade: String,
    estado: String,
    rua: String,
    bairro: String,
    complemento: String,
  },
  { versionKey: false }
);
module.exports = mongoose.model("Local", localSchema);
