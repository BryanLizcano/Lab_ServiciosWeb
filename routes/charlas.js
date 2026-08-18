const express = require('express');
const router = express.Router();

const Charla = require('../models/Charla');


// Mostrar formulario
router.get('/nueva', (req, res) => {
    res.render('nueva-charla');
});


// Obtener todas las charlas
router.get('/', async (req, res) => {

    try {

        const charlas = await Charla.find();

        res.render('charlas', {
            charlas: charlas
        });

    } catch (error) {

        console.error(error);

        res.status(500).send('Error obteniendo las charlas');
    }
});


// Crear una charla
router.post('/', async (req, res) => {

    try {

        const charla = new Charla({
            titulo: req.body.titulo,

            ponente: {
                nombre: req.body.nombre,
                correo: req.body.correo
            }
        });

        await charla.save();

        res.redirect('/charlas');

    } catch (error) {

        console.error(error);

        res.status(500).send('Error guardando la charla');
    }
});


module.exports = router;