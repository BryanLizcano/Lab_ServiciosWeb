const mongoose = require('mongoose');

const charlaSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    fecha: String,
    hora: String,
    expositor: {
        nombre: String,
        especialidad: String,
        correo: String
    }
});

module.exports = mongoose.model('Charla', charlaSchema);