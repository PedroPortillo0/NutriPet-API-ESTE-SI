const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        // required: true
    },
    apellido:{
        type: String,
        // required: true
    },
    correo:{
        type: String,
        required: true
    },
    usuario:{
        type: String,
        // required: true   
    },
    password:{
        type: String,
        required: true
    },
    confirmarPassword:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
