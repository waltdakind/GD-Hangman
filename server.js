const http = require('http');
const path = require('path');
const express = require('express');
const hangmanapp = require('./hangmanapp');
const PORT = process.env.PORT || 3000;
const app = express();

// Define the port to run on
app.set('PORT', PORT);

//serve public folder
app.use(express.static(__dirname + '/public'));

// Listen for requests
var server = app.listen(app.get('PORT'), function() {
  console.log('PORTing to the PORTY PORT PORT...' + PORT);
});




