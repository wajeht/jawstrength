const path = require('path');
const root = require('../util/rootDirectory.js');

require('dotenv').config({
    path: path.join(root, '.env'),
});

module.exports = {
    server: {
        port: process.env.PORT,
    },
    email: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth_user: process.env.EMAIL_AUTH_USER,
        auth_pass: process.env.EMAIL_AUTH_PASS,
    },
};
