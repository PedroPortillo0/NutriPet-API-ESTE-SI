
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const UserRoutes = require('./routes/user');
const DatosRoutes = require('./routes/datos');

const app = express();
const port = process.env.PORT || 9000;

// Middleware para habilitar CORS para todas las solicitudes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir acceso desde cualquier origen
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Middleware para parsear el body de las solicitudes a formato JSON
app.use(express.json());

// Rutas
app.use('/api', UserRoutes);
app.use('/api', DatosRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// Conexión a MongoDB Atlas
mongoose
  .connect("mongodb+srv://NutriPet:NutriPet123@cluster0.dy7ml0c.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// Iniciar el servidor
app.listen(port, () => console.log('Server listening on port', port));
