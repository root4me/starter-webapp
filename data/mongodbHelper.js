/**
* Generic CRUD calls to mongodb using node js mongodb driver
* package.json need to have "mongodb": "^2.1.16",
**/

var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = function(server,port,dbname){
  return 'mongodb://' + server + ':' + port + '/' + dbname;
};

/**
* [function description]
* @param  {String}   server         [description]
* @param  {Number}   port           [description]
* @param  {[type]}   dbName         [description]
* @param  {[type]}   collectionName [description]
* @param  {Function} callback       [description]
* @return {[type]}                  [description]
*/
var getAll = function(server,port, dbName, collectionName, callback){

  mongo.connect(url(server,port, dbName), function(err, db) {

    if (err != null)
    {
      callback(err,null);
      return;
    }
    console.log("Connected to mongodb server");
    var collection = db.collection(collectionName);

    collection.find().toArray(function(err, docs) {
      db.close();
      callback(err,docs);
    });
  });

};

/**
* [function description]
* @param  {[type]}   server         [description]
* @param  {[type]}   port           [description]
* @param  {[type]}   dbName         [description]
* @param  {[type]}   collectionName [description]
* @param  {[type]}   data           [description]
* @param  {Function} callback       [description]
* @return {[type]}                  [description]
*/
var insert = function(server, port, dbName, collectionName, data, callback){

  mongo.connect(url(server,port, dbName), function(err, db) {
    console.log("Connected correctly to server");
    var collection = db.collection(collectionName);

    data.created = Date();
    console.log(data);

    collection.insertOne(data , function(err,docs){

      console.log(err);
      callback(err,docs);
    });
  });

}

/**
* [function description]
* @param  {[type]}   server         [description]
* @param  {[type]}   port           [description]
* @param  {[type]}   dbName         [description]
* @param  {[type]}   collectionName [description]
* @param  {Function} callback       [description]
* @return {[type]}                  [description]
*/
var findById = function(server,port,dbName,collectionName, callback){

};


module.exports.getAll = getAll;
module.exports.insert = insert;
