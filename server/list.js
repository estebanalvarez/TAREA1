const axios = require('axios');

/**
 * REQUIRE IMPORTS
 */
const cnts = require('../config/config');

/**
 * listContact
 * FUNCION ENCARGADA DE OBTENER EL CONJUNTO DE CONTACTOS EXISTENTES
 * RESPUESTA EN FORMATO JSON
 */
async function listContact() {

    return axios({
        method: 'get',
        url: cnts.LIST_PATH,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cnts.TOKEN_}`
        }
    });
}


module.exports = {
    listContact,
}