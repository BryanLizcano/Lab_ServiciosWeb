require('dotenv').config();

const express = require('express');

const connectDB = require('./config/database');

const autosRoutes = require('./routes/autos');
const charlasRoutes = require('./routes/charlas');

const app = express();

connectDB();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/', autosRoutes);
app.use('/charlas', charlasRoutes);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));