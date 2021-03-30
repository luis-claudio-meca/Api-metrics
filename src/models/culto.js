const mongoose = require('../db')

const CultoSchema = new mongoose.Schema({
    
    frequentadores: {
        type: Number,
        require: true,
    },
    visitantes: {
        type: Number,
        require: true,
    },
    voluntarios: {
        type: Number,
        require: true,
    },
    criancas: {
        type: Number,
        require: true,
    },
    decididos: {
        type: Number,
        require: true,
    },
    launch: {
        type: Number,
        require: true,
    },
    data: {
        type: String,
        require: true,
    },
    evento: {
        type: String,
        require: true,
        lowercase: true,
    },
   
});

const Culto = mongoose.model('Culto', CultoSchema);

module.exports = Culto;