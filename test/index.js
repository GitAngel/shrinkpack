// 3rd party modules
var mock = require('mock-fs');
var cache = require('./contracts/cache');

console.log(
  JSON.stringify(cache.getPackage('jamie', '0.0.1'), null, 2)
);
