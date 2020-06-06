const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProteinasSchema = new Schema({
    nombre: String
    
});

module.exports = mongoose.model('Proteinas', ProteinasSchema);