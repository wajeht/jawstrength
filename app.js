// express
const express = require('express');
const app = express();

// util
const helmet = require('helmet');

// routes
const indexRouter = require('./routes/indexRouter.js');

// err controlelr
const errorController = require('./controllers/errorController.js');

// templating engine
app.set('view engine', 'ej');
app.set('views', 'views');

// middlewares
app.use(helmet());
app.use(express.static('public'));
app.use(indexRouter);
app.use(errorController.get404);

module.exports = app;
