const server = require('express');
const middleware = require('morgan');
const { swaggerDocs: V1SwaggerDocs } = require('./swagger');

const app = server();

// Configuración

app.set('PORT', process.env.PORT || 1234);
app.set('json spaces', 2);

// Middlewares

app.use(middleware('dev'));
app.use(server.urlencoded({extended: false}));
app.use(server.json());

// Rutas

app.use('/api/alumnos',require('./routes/alumnos'));

// Servidor de la API

app.listen(app.get('PORT'), () => {
    console.log(`Server listening on port: ${app.get('PORT')}`);
    V1SwaggerDocs(app, app.get('PORT'));
})