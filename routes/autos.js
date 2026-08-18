const express = require('express');
const router = express.Router();

const autos = require('../data/autos');


// Página principal
router.get('/', (req, res) => {

    res.render('index', {
        nombre: 'Bryan Lizcano',
        autos: autos
    });

});


// Detalle de un auto
router.get('/auto/:id', (req, res) => {

    const auto = autos.find(
        a => a.id === parseInt(req.params.id)
    );

    if (!auto) {
        return res.status(404).send('Auto no encontrado');
    }

    res.render('detalle', {
        nombre: 'Bryan Lizcano',
        auto: auto
    });

});


module.exports = router;