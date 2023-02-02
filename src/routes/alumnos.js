const { Router } = require('express');
const router = Router();
const _ = require('underscore');

// DB falseada
const db = require('../db/alumnos.json');

// Métodos GET

/** GET all */
router.get('/', (req, res) => {
    res.json(db);
});
/** GET uno por id */
router.get('/:id', (req, res) => {

    const { id } = req.params;

    _.each(db, (alumn, i) => {
        
        if (id > db.length || id <= 0) {
            res.status(400).json({error: `El alumno con id ${id} no está en la base de alumnos`});
        } else if (alumn.id == id){
            res.json(alumn);
        }
    });

});

// Método PUT

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellidos, genero, empresa } = req.body;

    if (nombre && apellidos && genero && empresa && id > 0 && id <= db.length) {
        
        _.each(db, (alumno, i) => {

            if (alumno.id == id) {
                alumno.nombre = nombre;
                alumno.apellidos = apellidos;
                alumno.genero = genero;
                alumno.empresa = empresa;
            }
        });

        res.json(db);

    } else if (id <= 0 || id > db.length) {
        res.status(400).json({error: `El id ${id} no está en la base de alumnos.`})
    } else {
        res.status(500).json({error: 'No se han introducido todos los campos, recuerde que ha de poner nombre, apellidos, género y empresa.'})
    }
});

// Método POST

router.post('/', (req, res) => {
    const { nombre, apellidos, genero, empresa } = req.body;

    if (nombre && apellidos && genero && empresa){
        const id = db.length + 1;
        const alumno = {id, ...req.body};

        db.push(alumno);
        res.json(db);

    } else {
        res.status(500).json({error: 'No se han introducido todos los campos, recuerde que ha de poner nombre, apellidos, género y empresa.'})
    }
});

// Método DELETE

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    _.each(db, (alumn, i) => {
        
        if (id > db.length || id <= 0) {
            res.status(400).json({error: `El alumno con id ${id} no está en la base de alumnos`});
        } else if (alumn.id == id) {
            db.splice(i, 1);
        }
    });

    res.json(db);
});

module.exports = router;