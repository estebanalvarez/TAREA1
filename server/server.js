const express = require('express')
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express()

//REQUIRE CONSTANTES
require("../config/config");
const cnts = require('../config/config');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//REQUIRE FUNCIONES PRINCIPALES API
const create = require('./create');
const token = require('./get-token');
const list = require('./list');

//VIEW ENGINE
app.set('view engine', 'hbs');

/**
 * HOME
 * VISTA PRINCIPAL DE LA APLICACION
 */
app.get('/', (req, res) => {
    res.render('home', {});
});

/**
 *  TOKEN
 * ACTUALIZA EL TOKEN DE ACCESO TEMPORAL AL SISTEMA
 * SI NO ES ACTUALIZADO AL INICIO NO SE PODRAN CREAR NI LISTAR LOS CONTACTOS
 */

app.get('/token', (req, res) => {

    token.getToken().then((response) => {

            let token_temp = response.data.access_token;
            if (token_temp != undefined) {
                cnts.TOKEN_ = token_temp;
            }
            console.log(cnts.TOKEN_);
        })
        .catch(console.log());

    res.redirect('/');

});

/**
 * CREATE
 * CREA UN NUEVO CONTACTO EN EL SITIO
 * RECIBE COMO PARAMETRO UNICO EL NOMBRE 'NAME' DEL CONTACTO EN EL FORMULARIO
 * COLOCA CATID = 0 COMO CATEGORIA POR DEFECTO
 */

app.post('/create', (req, res) => {
    let form_body = req.body;
    console.log(form_body);

    let body = {
        name: form_body.name,
        catid: 0
    }

    console.log(body);

    create.createContact(body);

    res.redirect('/');
});


/**
 *  LIST
 *  OBTIENE TODOS LOS CONTACTOS DISPONIBLES EN LA API
 *  LISTA LOS CONTACTOS EN ORDEN
 */

app.get('/list', (req, res) => {

    list.listContact()
        .then((response) => {
            let contacts = response.data._embedded.item
            res.render('list', { item: contacts });

        })
        .catch((err) => {
            console.log(err)
            res.redirect('/');
        });


});



/**
 * CONFIGURACION DEL SERVIDOR PUERTO POR DEFECTO (3000)
 */
app.listen(process.env.PORT, () => {
    console.log(`Listening port : ${process.env.PORT}`);
})