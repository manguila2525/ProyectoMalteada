const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const MalteadasSchema = new Schema({
    nombreMalteada: String,
    nombreFruta: String,
    nombreLiquido: String,
    nombreProteina: String,
    corazon: Number,
    porcentaje: Number
});

module.exports = mongoose.model('Malteadas', MalteadasSchema);