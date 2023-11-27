const express = require("express");
const datosSchema = require('../models/datos')

const routerDatos = express.Router();

//create Datos de temperatura y humedad
routerDatos.post("/CreateDatos", (req, res) => {
    const {  temperatura, humedad, mensaje } = req.body;
    const fechaActual = new Date();

    // Agregar la fecha actual a los datos
    const datos = datosSchema({ temperatura, humedad, mensaje, fecha: fechaActual });

    datos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// ------------------------------------------------------------------------

routerDatos.post("/CreateDatosHora", (req, res) => {
    const {  temperatura, humedad, mensaje } = req.body;
    const fechaActual = new Date();

    // Agregar la fecha actual a los datos
    const datos = datosSchema({ temperatura, humedad, mensaje, fecha: fechaActual });

    datos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// ------------------------------------------------------------------------------------------------------

// routerDatos.get("/GetAllDatos", (req, res) => {
//     datosSchema
//         .find()
//         .sort({ fecha: -1 }) // Ordenar por fecha de manera descendente
//         .limit(12) // Limitar a los 12 más recientes
//         .then((data) => {
//             res.json({ data}); 
//         })
//         .catch((error) => res.json({ message: error }));
// });

routerDatos.get("/GetAllDatos", (req, res) => {
    datosSchema
        .find()
        .sort({ fecha: -1 }) // Ordenar por fecha de manera descendente
        .limit(12) // Limitar a los 12 más recientes
        .then((data) => {
            if (data.length > 0) {
                // Calcular la media de temperatura y humedad
                let sumaTemperatura = 0;
                let sumaHumedad = 0;

                data.forEach((dato) => {
                    sumaTemperatura += dato.temperatura;
                    sumaHumedad += dato.humedad;
                });

                const mediaTemperatura = sumaTemperatura / data.length;
                const mediaHumedad = sumaHumedad / data.length;

                // Enviar respuesta con los datos y las medias calculadas
                res.json({
                    data,
                    mediaTemperatura,
                    mediaHumedad
                });
            } else {
                res.json({ message: "No se encontraron datos" });
            }
        })
        .catch((error) => res.json({ message: error }));
});





module.exports = routerDatos;
