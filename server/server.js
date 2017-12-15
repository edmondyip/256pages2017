var Express = require('express');
var BodyParser = require('body-parser');

// CORS
var cors = require('cors');

// create express app
var app = Express();
app.use(BodyParser.urlencoded({
    extended: true
}));
app.use(BodyParser.json());

app.use(cors());

// parse requests of content-type - application/json
app.use(BodyParser.json());

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', cors(), function (req, res) {
    res.json({
        "message": "Welcome to 256pages with token, please leave comment to me."
    });
});

// Require Notes routes
require('./app/routes/guestbook.routes.js')(app);

// listen for requests
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});