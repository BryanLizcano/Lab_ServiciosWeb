const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const autos = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Supra MK4',
        categoria: 'JDM',
        existencias: 3,
        proveedor: { nombre: 'Tokyo Motors Import', contacto: 'contacto@tokyomotors.jp' }
    },
    {
        id: 2,
        marca: 'Ford',
        modelo: 'Mustang GT500',
        categoria: 'Americano',
        existencias: 0,
        proveedor: { nombre: 'Detroit Auto Group', contacto: 'ventas@detroitauto.com' }
    },
    {
        id: 3,
        marca: 'BMW',
        modelo: 'M3 E46',
        categoria: 'Alemán',
        existencias: 7,
        proveedor: { nombre: 'Munich Performance', contacto: 'info@munichperf.de' }
    },
    {
        id: 4,
        marca: 'Nissan',
        modelo: 'Silvia S15',
        categoria: 'Drifting',
        existencias: 1,
        proveedor: { nombre: 'Osaka Drift Parts', contacto: 'sales@osakadrift.jp' }
    },
    {
        id: 5,
        marca: 'Porsche',
        modelo: '911 GT3',
        categoria: 'Sport',
        existencias: 5,
        proveedor: { nombre: 'Stuttgart Classics', contacto: 'contact@stuttgartclassics.de' }
    },
];

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Bryan Lizcano',
        autos: autos
    });
});

app.get('/auto/:id', (req, res) => {
    const auto = autos.find(a => a.id === parseInt(req.params.id));

    if (!auto) {
        return res.status(404).send('Auto no encontrado');
    }

    res.render('detalle', { nombre: 'Bryan Lizcano', auto });
});


app.listen(3000, () => console.log('Servidor en http://localhost:3000'));