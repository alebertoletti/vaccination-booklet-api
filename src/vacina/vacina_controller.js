var express = require("express");
var router = express.Router();
var Vacina = require("./vacina");

router.post("/", (req, res) => {
  let e = new Vacina({
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    validade: req.body.validade,
  });
  e.save((err, estud) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(estud);
  });
});

router.get("/", (req, res) => {
  Vacina.find().exec((err, est) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(est);
  });
});

router.delete("/:id", (req, res) => {
  Vacina.deleteOne({ _id: req.params.id }, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send({});
  });
});

router.patch("/:id", (req, res) => {
  Vacina.findById(req.params.id, (err, est) => {
    if (err) res.status(500).send(err);
    else if (!est) res.status(404).send({});
    else {
      (est.nome = req.body.nome),
        (est.fabricante = req.body.fabricante),
        (est.validade = req.body.validade);
      est.save((err, est) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(est);
      });
    }
  });
});

module.exports = router;
