var mh = require('./mongodbHelper');
var config = require('../config');

console.log(config.database.server);

var getAll = function(callback){
  mh.getAll(config.database.server,config.database.port,config.database.db,'samples', function(err,data){
    callback(err,data);
  });
};

var insert = function(data, callback){

  mh.insert(config.database.server,config.database.port,config.database.db,'samples',data, function(err,data){
    callback(err,data);
  });
};

var del = function(data, callback){

  mh.delete(config.database.server,config.database.port,config.database.db,'samples',data, function(err,data){
    callback(err,data);
  });
};

module.exports.getAll = getAll;
module.exports.insert = insert;
module.exports.delete = del;
