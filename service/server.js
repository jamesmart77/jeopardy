const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/favicon.ico', express.static(`${__dirname}/../public/favicon.ico`));
app.use('/manifest.json', express.static(`${__dirname}/../public/manifest.json`));

// Serve up static assets
app.use('/', express.static(`${__dirname}/../build`));
app.use('/*', express.static(`${__dirname}/../build`));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
