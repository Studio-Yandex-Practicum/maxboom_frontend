const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports.buildCssLoader = (isEnvProduction)=> {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader' ,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath) => Boolean(resPath.includes('.module.')),
            localIdentName: isEnvProduction
              ? '[hash:base64:8]'
              : '[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };
}
