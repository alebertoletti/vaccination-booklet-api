var express = require('express');
var router = express.Router();
var Local = require('./local')
router.post('/', (req, res) => {
    let e = new Local({
        cidade: req.body.cidade,
        estado: req.body.estado,
        rua: req.body.rua,
        bairro: req.body.bairro,
        complemento: req.body.complemento
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Local.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})

router.delete('/:id', (req, res) => {
    Local.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Local.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
            est.cidade = req.body.cidade,
                est.estado = req.body.estado,
                est.rua = req.body.rua,
                est.bairro = req.body.bairro,
                est.complemento = req.body.complemento
            est.save((err, est) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(est);
            })
        }
    })
})
module.exports = router;