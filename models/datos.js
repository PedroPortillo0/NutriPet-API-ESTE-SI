const mongoose = require("mongoose");

const datosSchema = mongoose.Schema({
    temperatura:{
        type: Number,
        required: true
    },
    humedad:{
        type: Number,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
    }

});

module.exports = mongoose.model('Datos', datosSchema);
