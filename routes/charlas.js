const express = require('express');
const router = express.Router();

const Charla = require('../models/Charla');

// 1. Obtener todas las charlas (GET /charlas)
router.get('/', async (req, res) => {
    try {
        const charlas = await Charla.find();
        res.json(charlas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error obteniendo las charlas' });
    }
});

// 2. Obtener una charla por ID (GET /charlas/:id)
router.get('/:id', async (req, res) => {
    try {
        const charla = await Charla.findById(req.params.id);
        if (!charla) {
            return res.status(404).json({ error: 'Charla no encontrada' });
        }
        res.json(charla);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error obteniendo la charla' });
    }
});

// 3. Crear una nueva charla (POST /charlas)
router.post('/', async (req, res) => {
    try {
        const { titulo, descripcion, fecha, hora, expositor_nombre, expositor_especialidad, expositor_correo } = req.body;
        const nuevaCharla = new Charla({
            titulo,
            descripcion,
            fecha,
            hora,
            expositor: {
                nombre: expositor_nombre,
                especialidad: expositor_especialidad,
                correo: expositor_correo
            }
        });
        const charlaGuardada = await nuevaCharla.save();
        res.status(201).json(charlaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando la charla' });
    }
});

// 4. Actualizar una charla (PUT /charlas/:id)
router.put('/:id', async (req, res) => {
    try {
        const { titulo, descripcion, fecha, hora, expositor_nombre, expositor_especialidad, expositor_correo } = req.body;
        const charlaActualizada = await Charla.findByIdAndUpdate(
            req.params.id, 
            {
                titulo,
                descripcion,
                fecha,
                hora,
                expositor: {
                    nombre: expositor_nombre,
                    especialidad: expositor_especialidad,
                    correo: expositor_correo
                }
            },
            { new: true } // Para que devuelva el documento actualizado
        );
        
        if (!charlaActualizada) {
            return res.status(404).json({ error: 'Charla no encontrada' });
        }

        res.json(charlaActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error actualizando la charla' });
    }
});

// 5. Eliminar charla (DELETE /charlas/:id)
router.delete('/:id', async (req, res) => {
    try {
        const charlaEliminada = await Charla.findByIdAndDelete(req.params.id);
        if (!charlaEliminada) {
            return res.status(404).json({ error: 'Charla no encontrada' });
        }
        res.json({ mensaje: 'Charla eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error eliminando la charla' });
    }
});

module.exports = router;