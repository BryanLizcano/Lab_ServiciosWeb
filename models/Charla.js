const mongoose = require('mongoose');

const charlaSchema = new mongoose.Schema({
    titulo: String,

    ponente: {
        nombre: String,
        correo: String
    }
});

const Charla = mongoose.model('Charla', charlaSchema);

module.exports = Charla;