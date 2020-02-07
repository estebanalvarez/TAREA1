const cnts = require('../config/config');
const axios = require('axios');



/**
 * createContact
 * @param {BODY} body
 * FUNCION ENCARGADA DE UTILIZAR LA API PARA LA CREACION DE UN NUEVO CONTACTO
 * UTILIZA LA INFORMACION ENVIADA POR EL FORMULARIO  
 */
async function createContact(body) {
    let resp = null;
    //CONSOLE LOG
    console.log('------------------------>' + body.name);

    resp = axios.post(cnts.CREATE_PATH, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cnts.TOKEN_}`
        }
    });

    return resp;

}

module.exports = {
    createContact
}