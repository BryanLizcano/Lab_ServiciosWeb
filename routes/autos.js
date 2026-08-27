const express = require('express');
const router = express.Router();
const pool = require('../config/database'); // <-- Esto define 'pool'

// Página principal y filtro por categoría
router.get('/', async (req, res) => {
    try {
        const categoriaSeleccionada = req.query.categoria;

        const categoriasRes = await pool.query('SELECT * FROM categorias ORDER BY nombre ASC');

        let queryAutos = 'SELECT a.id, a.marca, a.modelo, a.existencias, c.nombre AS categoria FROM autos a JOIN categorias c ON a.categoria_id = c.id';
        const params = [];

        if (categoriaSeleccionada) {
            queryAutos += ' WHERE c.nombre = $1';
            params.push(categoriaSeleccionada);
        }

        queryAutos += ' ORDER BY a.marca ASC';

        const autosRes = await pool.query(queryAutos, params);

        res.render('index', {
            nombre: 'Bryan Lizcano',
            autos: autosRes.rows,
            categorias: categoriasRes.rows,
            categoriaActual: categoriaSeleccionada || null
        });
    } catch (error) {
        console.error('Error al obtener autos o categorías:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Detalle de un auto
router.get('/auto/:id', async (req, res) => {
    try {
        const autoId = req.params.id;
        const query = `
            SELECT 
                a.id, 
                a.marca, 
                a.modelo, 
                a.existencias, 
                c.nombre AS categoria,
                p.nombre AS proveedor_nombre,
                p.contacto AS proveedor_contacto
            FROM autos a
            LEFT JOIN categorias c ON a.categoria_id = c.id
            LEFT JOIN proveedores p ON a.proveedor_id = p.id
            WHERE a.id = $1
        `;

        const resultado = await pool.query(query, [autoId]);

        if (resultado.rows.length === 0) {
            return res.status(404).send('Auto no encontrado');
        }

        const fila = resultado.rows[0];

        const auto = {
            id: fila.id,
            marca: fila.marca,
            modelo: fila.modelo,
            categoria: fila.categoria,
            existencias: fila.existencias,
            proveedor: {
                nombre: fila.proveedor_nombre,
                contacto: fila.proveedor_contacto
            }
        };

        res.render('detalle', {
            nombre: 'Bryan Lizcano',
            auto: auto
        });
    } catch (error) {
        console.error('Error obteniendo detalle del auto:', error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;