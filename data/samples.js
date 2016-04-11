var mh = require('./mongodbHelper');
var config = require('../config');

console.log(config.database.server);

var getAll = function(callback){
  mh.getAll(config.database.server,config.database.port,config.database.db,'samples', function(err,data){
    callback(err,data);
  });
};

var insert = function(callback){
  var sampleData = {
    country : "USA",
    capital : "Washington, D.C"
  };

  mh.insert(config.database.server,config.database.port,config.database.db,'samples',sampleData, function(err,data){
    callback(err,data);
  });
};

module.exports.getAll = getAll;
module.exports.insert = insert;
