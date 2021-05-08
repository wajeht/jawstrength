const path = require('path');
const root = require('../util/rootDirectory.js');

require('dotenv').config({
    path: path.join(root, '.env'),
});

module.exports = {
    server: {
        port: process.env.PORT,
    },
};
