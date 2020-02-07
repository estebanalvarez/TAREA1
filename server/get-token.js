const axios = require('axios');

/**
 * REQUIRE IMPORTS
 */
const cnts = require('../config/config');


async function getToken() {

    const body = {
        grant_type: cnts.GRANT_TYPE_,
        client_id: cnts.CLIENT_ID_,
        client_secret: cnts.CLIENT_SECRET_
    }

    return axios.post(cnts.OAUTH2_PATH, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}


module.exports = {
    getToken
}