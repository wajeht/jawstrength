require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 6969;


// create instance of an express app
const app = express();

// on home rout
app.get('/', (req, res) => {
    res.send({
        message: 'Hello world',
    });
});


app.listen(port, () => {
    console.log('listening on port 300');
});
