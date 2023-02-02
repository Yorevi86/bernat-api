const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Meta datos básico sobre nuestra API
const options = {
    definition: {
        "openapi": "3.0.3",
        "info": {
            "title": "Aplicación alumnos Bernat - OpenAPI 3.0",
            "description": "Esto es una aplicación de prueba para poder revisar la API BERNAT-API",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
                "email": "bernatponmeun10@gmail.com"
            },
            "license": {
                "name": "Bernat 1.0",
                "url": "https://github.com/bernat13"
            },
            "version": "1.0.11"
        },
        "externalDocs": {
            "description": "Find out more about Swagger",
            "url": "http://swagger.io"
        },
        "tags": [
            {
                "name": "alumnos",
                "description": "Datos de los alumnos",
                "externalDocs": {
                    "description": "Más",
                    "url": "https://github.com/Yorevi86/bernat-api"
                }
            }
        ],
        "paths": {
            "/api/alumnos": {
                "get": {
                    "tags": [
                        "alumnos"
                    ],
                    "summary": "Obtener todos los alumnos",
                    "description": "Método para obtener todos los alumnos",
                    "operationId": "getAllAlumnos",
                    "responses": {
                        "200": {
                            "description": "Operación exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/alumno"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value"
                        }
                    }
                },
                "post": {
                    "tags": [
                        "alumnos"
                    ],
                    "summary": "Añadir un nuevo alumno a la DB",
                    "description": "Se añade un nuevo registro a la DB",
                    "operationId": "addAlumno",
                    "requestBody": {
                        "description": "Crear un nuevo alumno para añadir a la DB",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/nuevoAlumno"
                                }
                            }
                        },
                        "required": true
                    },
                    "responses": {
                        "200": {
                            "description": "Operación exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/nuevoAlumno"
                                    }
                                }
                            }
                        },
                        "405": {
                            "description": "Datos incorrectos"
                        }
                    }
                }
            },
            "/api/alumnos/{Id}": {
                "get": {
                    "tags": [
                        "alumnos"
                    ],
                    "summary": "Encontrar un alumno por el ID",
                    "description": "Devuelve un alumno",
                    "operationId": "getAlumnoById",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID del alumno a devolver",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operación exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/alumno"
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "$ref": "#/components/schemas/alumno"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Id inválida"
                        },
                        "404": {
                            "description": "Alumno no encontrado"
                        }
                    }
                },
                "put": {
                    "tags": [
                        "alumnos"
                    ],
                    "summary": "Actualiza un alumno de la DB con un formato concreto",
                    "description": "",
                    "operationId": "updateAlumno",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID del alumno a actualizar",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "requestBody": {
                        "description": "Actualiza un alumno de la DB",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/nuevoAlumno"
                                }
                            }
                        },
                        "required": true
                    },
                    "responses": {
                        "200": {
                            "description": "Operación exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/alumno"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Id inválida"
                        },
                        "404": {
                            "description": "Alumno no encontrado"
                        },
                        "405": {
                            "description": "Excepción de validación"
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "alumnos"
                    ],
                    "summary": "Borra un alumno",
                    "description": "Elimina un alumno de la DB",
                    "operationId": "deleteAlumno",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "Id del alumno a borrar",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "responses": {
                        "400": {
                            "description": "Id inválida"
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {
                "alumno": {
                    "required": [
                        "name",
                        "apellidos",
                        "genero",
                        "empresa"
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer",
                            "format": "int64",
                            "example": 6
                        },
                        "nombre": {
                            "type": "string",
                            "example": "Bernat"
                        },
                        "apellidos": {
                            "type": "string",
                            "example": "Costa Ruiz"
                        },
                        "genero": {
                            "type": "string",
                            "example": "yo que se, no soy 100tifico"
                        },
                        "empresa": {
                            "type": "string",
                            "example": "Cesur"
                        }
                    }
                },
                "nuevoAlumno": {
                    "required": [
                        "name",
                        "apellidos",
                        "genero",
                        "empresa"
                    ],
                    "type": "object",
                    "properties": {
                        "nombre": {
                            "type": "string",
                            "example": "Bernat"
                        },
                        "apellidos": {
                            "type": "string",
                            "example": "Costa Ruiz"
                        },
                        "genero": {
                            "type": "string",
                            "example": "yo que se, no soy 100tifico"
                        },
                        "empresa": {
                            "type": "string",
                            "example": "Cesur"
                        }
                    }
                }
            },
            "requestBodies": {
                "nuevoAlumno": {
                    "description": "Objeto alumno que necesita ser añadido a la DB",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/nuevoAlumno"
                            }
                        }
                    }
                }
            }
        }
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