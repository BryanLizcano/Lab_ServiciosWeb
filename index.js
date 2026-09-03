require('dotenv').config();

const express = require('express');

const autosRoutes = require('./routes/autos');
const charlasRoutes = require('./routes/charlas');

const connectMongo = require('./config/mongo');

const app = express();

connectMongo();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta Menú Principal
app.get('/', (req, res) => {
    res.render('home', { nombre: 'Bryan Lizcano' });
});

// Rutas postgres
app.use('/autos', autosRoutes);

// Rutas mongo
app.use('/charlas', charlasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));