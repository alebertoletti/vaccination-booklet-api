var express = require("express");
var router = express.Router();
var Usuario = require("./usuario");

router.post("/", (req, res) => {
  let e = new Usuario({
    nome: req.body.nome,
    dataNascimento: req.body.dataNascimento,
    sexo: req.body.sexo,
  });
  e.save((err, estud) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(estud);
  });
});

router.get("/", (req, res) => {
  Usuario.find().exec((err, est) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(est);
  });
});

router.delete("/:id", (req, res) => {
  Usuario.deleteOne({ _id: req.params.id }, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send({});
  });
});

router.patch("/:id", (req, res) => {
  Usuario.findById(req.params.id, (err, est) => {
    if (err) res.status(500).send(err);
    else if (!est) res.status(404).send({});
    else {
      (est.nome = req.body.nome),
        (est.dataNascimento = req.body.dataNascimento),
        (est.sexo = req.body.sexo);
      est.save((err, est) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(est);
      });
    }
  });
});

module.exports = router;
