import { factory } from 'factory-girl';

var normalizedPath = require("path").join(__dirname, "factories");

require("fs").readdirSync(normalizedPath).forEach(function (file) {
  require("./factories/" + file);
});

export default factory;