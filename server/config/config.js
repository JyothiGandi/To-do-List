/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

let environment = process.env.NODE_ENV || 'development';
//By default application will run in development environment

if (['development', 'test', 'staging', 'production'].indexOf(environment) == -1) {
    console.log(`Set environment to development / test / staging / production`);
    process.exit(1);
}

console.log(`App running in ${environment} environment`);

let configuration = require(`../config/env/${environment}`);

module.exports = configuration;

