/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

const path = require('path');
let rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
    root: rootPath,
    port: 3000,
    mongoDB: {
        host: 'localhost',
        port: 27017,
        // user: 'username',
        // password: 'password',
        database: 'todo-test'
    }
};