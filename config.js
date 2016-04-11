/**
* [local description]
*
*/

var local = {
  environment: 'local',
  server: 'localhost',
  port: 3000,
  database : {
    server: 'localhost',
    port: 27017,
    db: 'sampleDb'
  }
};

var production = {
  environment: 'production',
  server: 'productionURL',
  port: 3000,
  database : {
    server: 'localhost',
    port: 27017,
    db: 'sampleDb'
  }
};

if (process.env.NODE_ENV === undefined)
{
  console.log('Start with node env parameter : NODE_ENV=development/production npm start');
}

if (process.env.NODE_ENV === 'development') {
  module.exports = local;
}
else if (process.env.NODE_ENV === 'production'){
  module.exports = production;
}
else {
  module.exports = local;
}
