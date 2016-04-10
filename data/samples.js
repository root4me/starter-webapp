var mongo4me = require('./mongo4me');


var getAll = function(callback){
  mongo4me.getAll('localhost','27017','sampleDb','samples', function(err,data){
    callback(err,data);
  });
};

module.exports.getAll = getAll;
