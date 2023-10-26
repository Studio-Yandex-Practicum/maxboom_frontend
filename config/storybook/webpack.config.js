const { buildCssLoader } = require("../build/loaders/buildCssLoader");
const cssLoader = buildCssLoader(false);

module.exports = ({ config }) => {
  config.module.rules.push(cssLoader)

  return config;
};
