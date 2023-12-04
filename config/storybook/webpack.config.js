const { buildCssLoader } = require("../build/loaders/buildCssLoader.cjs");
const path = require("path");
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
  config.resolve.alias['@'] = path.resolve(__dirname, '..', '..', 'src');

  config?.plugins?.push(
    new DefinePlugin({
      __API__: JSON.stringify(process.env.APP_HOSTNAME),
    }),
  );

  return config;
};
