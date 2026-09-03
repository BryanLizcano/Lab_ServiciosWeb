require('dotenv').config();
const mongoose = require('mongoose');
const Charla = require('./models/Charla');

// Aquí está la información de las charlas que me pediste
const datosCharlas = [
    {
        titulo: "El futuro de la Inteligencia Artificial",
        descripcion: "Una visión profunda de cómo la IA cambiará la industria en los próximos 10 años.",
        fecha: "15 de Octubre, 2026",
        hora: "10:00 AM",
        expositor: {
            nombre: "Dra. Elena Rostova",
            especialidad: "Machine Learning & Ética",
            correo: "elena.rostova@tech.com"
        }
    },
    {
        titulo: "Desarrollo Web Moderno y Escalable",
        descripcion: "Mejores prácticas para construir aplicaciones web que soporten millones de usuarios.",
        fecha: "15 de Octubre, 2026",
        hora: "02:00 PM",
        expositor: {
            nombre: "Marcos Villanueva",
            especialidad: "Arquitectura Cloud",
            correo: "marcos.v@devworld.org"
        }
    },
    {
        titulo: "Ciberseguridad en tiempos de crisis",
        descripcion: "Ataques recientes y cómo proteger la infraestructura de tu empresa.",
        fecha: "16 de Octubre, 2026",
        hora: "09:30 AM",
        expositor: {
            nombre: "Sofía Carter",
            especialidad: "Seguridad Informática",
            correo: "scarter@security.net"
        }
    }
];

// Conectarse a MongoDB y guardar los datos
const inyectarDatos = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a MongoDB...');

        // Limpiar la colección por si había datos viejos
        await Charla.deleteMany();
        
        // Insertar las nuevas charlas
        await Charla.insertMany(datosCharlas);
        
        console.log('¡Datos de las charlas inyectados con éxito en Atlas! 🚀');
        process.exit();
    } catch (error) {
        console.error('Error inyectando datos:', error);
        process.exit(1);
    }
};

inyectarDatos();