/**
 * PUERTO
 */

process.env.PORT = process.env.PORT || 3000;

const CARNET_ = '201313872';

/**
 * CLIENT/USER DATA
 */
const GRANT_TYPE_ = 'client_credentials';
const CLIENT_ID_ = 'davix93a@gmail.com';
const CLIENT_SECRET_ = '201313872';
const TOKEN_ = '';

/**
 * PATH API 
 */
const OAUTH2_PATH = 'https://api.softwareavanzado.world/index.php?option=token&api=oauth2';
const CREATE_PATH = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal';
const LIST_PATH = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&list[limit]=0';

module.exports = {
    CARNET_,
    GRANT_TYPE_,
    CLIENT_ID_,
    CLIENT_SECRET_,
    TOKEN_,
    OAUTH2_PATH,
    CREATE_PATH,
    LIST_PATH
}