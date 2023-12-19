import webpack from 'webpack'
import path from "path";
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {buildCssLoader} from "./config/build/loaders/buildCssLoader.cjs";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const isEnvProduction = process.env.NODE_ENV === 'production'
const cssLoader = buildCssLoader(isEnvProduction);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    hot: !isEnvProduction,
    magicHtml: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: path.resolve(__dirname, 'public/index.html'),
          publicPath: '/',
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
    }),
    new webpack.DefinePlugin({
      __API__: JSON.stringify(process.env.APP_HOSTNAME || ''),
      __IS_DEV__: !isEnvProduction,
    })
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
      cssLoader,
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
}

export default () => {
  if (isEnvProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
