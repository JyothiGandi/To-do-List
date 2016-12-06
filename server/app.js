/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

let express = require('express');
let app = express();

// Environment specific configuration in which application runs
let config = require('./config/config');

// Database connection
require('./config/mongoUtil').connect(config.mongoDB);

// Application settings
require('./config/express')(app);

// API routing
require('./config/routes')(app);

let port = config.port;

app.listen(port, () => console.log(`App listening on port ${port}`));

