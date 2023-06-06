var express = require('express');
var router = express.Router();
var Vacinacao = require('./vacinacao')
router.post('/', (req, res) => {
    let e = new Vacinacao({
        lotedose: req.body.lotedose,
        datavacinacao: req.body.datavacinacao,
        proximadose: req.body.proximadose
        
    });
    e.save((err, estud) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Vacinacao.find().exec((err, est) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(est);
    })
})

router.delete('/:id', (req, res) => {
    Vacinacao.deleteOne({ _id: req.params.id }, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Vacinacao.findById(req.params.id, (err, est) => {
        if (err)
            res.status(500).send(err);
        else if (!est)
            res.status(404).send({});
        else {
                est.lotedose = req.body.lotedose,
                est.datavacinacao = req.body.datavacinacao,
                est.proximadose = req.body.proximadose
                
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