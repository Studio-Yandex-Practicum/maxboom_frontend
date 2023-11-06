const { buildCssLoader } = require("../build/loaders/buildCssLoader");
const cssLoader = buildCssLoader(false);

module.exports = ({ config }) => {
  config.module.rules.push(cssLoader)
  config.module.rules = config.module.rules.map(rule => {
    if (/svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
