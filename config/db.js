const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Atlas conectado correctamente 🍃');
    } catch (error) {
        console.error('Error conectando a MongoDB Atlas:', error);
    }
};

module.exports = connectMongo;