const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Meta datos básico sobre nuestra API
const options = {
    definition: {
        
    },
    apis: ["src/routes/alumnos.js"],
};


// Documentación swagger en formato JSON
const swaggerSpec = swaggerJSDoc(options);

// Función para llamar al constructor de la documentación
const swaggerDocs = (app, port) => {
    // Manejador de ruta para acceder a los docs
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    // Habilita la creación de nuestra doc en formato JSON
    app.get('/api/docs.json', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(
        `📄 La versión 1 Docs se encuentra disponible en http://localhost:${port}/api/docs`
    )
}

module.exports = { swaggerDocs };