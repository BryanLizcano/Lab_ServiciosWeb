// const mongoose = require('mongoose');

//const connectDB = async () => {
//    try {
//        await mongoose.connect(process.env.MONGODB_URI);
//
//        console.log('MongoDB conectado correctamente');
//    } catch (error) {
//        console.error('Error conectando a MongoDB:', error);
//        process.exit(1);
//    }
//};

//module.exports = connectDB;

// Conexion con PostgreSQL

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});
// Probar conexión inicial
pool.connect()
    .then(client => {
        console.log('PostgreSQL conectado exitosamente');
        client.release();
    })
    .catch(err => console.error('Error al conectar a PostgreSQL:', err.message));
module.exports = pool;