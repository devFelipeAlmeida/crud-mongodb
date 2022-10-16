const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

// home routes
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// contact routes
route.get('/contact', contactController.contactPrincipal);


module.exports = route;