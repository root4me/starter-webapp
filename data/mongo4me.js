/**
* Generic CRUD calls to mongodb using node js mongodb driver
* package.json need to have "mongodb": "^2.1.16",
**/

var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

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
  console.log('get all wines');
  console.log(server);
  console.log(port);
  console.log(dbName);
  console.log(collectionName);
  console.log(url(server,port, dbName));

  MongoClient.connect(url(server,port, dbName), function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collection = db.collection(collectionName);

    collection.find().toArray(function(err, docs) {
      db.close();
      callback(err,docs);
    });
  });

};

module.exports.getAll = getAll;
