/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

let MongoClient = require('mongodb').MongoClient;
let _db;

module.exports = {

  connect(mongoDB) {
      let url = `mongodb://${mongoDB.host}:${mongoDB.port}/${mongoDB.database}`;
      MongoClient.connect(url, (err, db) => {
          if(err) {
              console.log(`Error connecting to Mongo - check mongodb connection`);
              process.exit(1);
          }
          _db = db;
          console.log(`Connected to Mongo`);
      });
  },

  todo() {
      return _db.collection('todo');
  }

};
