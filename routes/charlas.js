const express = require('express');
const router = express.Router();

const Charla = require('../models/Charla');

// Obtener todas las charlas (Solo Mostrar)
router.get('/', async (req, res) => {
    try {
        const charlas = await Charla.find();

        res.render('charlas/charlas', {
            nombre: 'Bryan Lizcano',
            charlas: charlas
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error obteniendo las charlas');
    }
});

module.exports = router;