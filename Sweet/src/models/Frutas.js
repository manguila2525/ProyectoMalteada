const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrutasSchema = new Schema({
    nombre: String,
    valor: Number
    
});

module.exports = mongoose.model('Frutas', FrutasSchema);