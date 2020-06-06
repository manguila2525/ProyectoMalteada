const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LiquidosSchema = new Schema({
    nombre: String,
    valor: Number
    
});

module.exports = mongoose.model('Liquidos', LiquidosSchema);