const { promisify } = require('util');
const fs = require('fs');

module.exports = {
  createReadStream: fs.createReadStream.bind(fs),
  exists: promisify(fs.exists),
  stat: promisify(fs.stat),
};
