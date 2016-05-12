// 3rd party modules
var mock = require('mock-fs');

module.exports = {
  getPackage: getPackage,
  getManifest: getManifest
};

function getPackage (name, version) {
  var directory = `~/.npm/${name}`;
  var entry = {};
  entry[directory] = {};
  entry[directory][version] = {
    'package.tgz': `<< contents of ${name}@${version} >>`,
    package: {
      'package.json': getManifest(name, version)
    }
  };
  return entry;
}

function getManifest (name, version) {
  return {
    name: name,
    version: version,
    dist: {
      tarball: `https://registry.npmjs.org/${name}/-/${name}-${version}.tgz`
    }
  };
}
