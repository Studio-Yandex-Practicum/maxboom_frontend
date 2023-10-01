// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isEnvProduction = process.env.NODE_ENV == 'production'

const config = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: isEnvProduction ? '[name].[contenthash:8].js' : 'bundle.js'
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 3100,
    hot: !isEnvProduction
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: './public/index.html'
        },
        isEnvProduction
          ? {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            }
          }
          : undefined
      )
    ),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.css$/i,
        use: [isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: 'asset/resource'
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
}

module.exports = () => {
  if (isEnvProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
