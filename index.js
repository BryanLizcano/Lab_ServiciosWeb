require('dotenv').config();
const express = require('express');

const connectDB = require('./config/db');
const charlasRoutes = require('./routes/charlas');

const app = express();

// Conectar a Base de Datos
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.json({ mensaje: 'Bienvenido a la API de Charlas' });
});

// Rutas
app.use('/charlas', charlasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
