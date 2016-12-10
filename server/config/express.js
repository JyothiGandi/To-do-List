/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
let helmet = require('helmet');
const path = require('path');

module.exports = (app) => {
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors());
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../../client')));
    //app.use('/static', express.static(path.join(__dirname, 'public')));
};