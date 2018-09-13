const isProd = process.env.NODE_ENV === 'production';

const
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  FaviconWebpackPlugin = require('favicons-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  webpack = require('webpack'),
  WebpackPwaManifest = require('webpack-pwa-manifest'),
  SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const
  develop = 'src',
  production = 'public',
  PUBLIC_PATH = 'https://patterns-js.firebaseapp.com/';

const
  SRC_DIR = path.join(__dirname, develop),
  DIST_DIR = path.join(__dirname, production);

const sourceMap = isProd ? 'nosources-source-map' : 'eval-source-map';
const publicPath = isProd ? PUBLIC_PATH : '/';

//============================================================
// Plugins
const cleanFolderProd = new CleanWebpackPlugin(production);

const commonsChunk = new webpack.optimize.CommonsChunkPlugin({
  name: ['index', 'vendor'],
});

const htmlIndex = new HtmlWebpackPlugin({
  template: path.join(__dirname, develop, 'index.html'),
  inject: 'body',
  hash: true,
  filename: 'index.html',
  chunks: ['index', 'vendor'],
});

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
  parallel: {cache: true, workers: 2},
  sourceMap: true,
});

const favicon = new FaviconWebpackPlugin({
  logo: `./${develop}/static/favicon/logo.png`,
  prefix: 'favicon/',
  emitStats: false,
  inject: true,
  background: '#fff',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: true,
  },
});

const pwaManifest = new WebpackPwaManifest({
  name: 'JavaScript patterns collection',
  short_name: 'JavaScript-patterns',
  description: 'A JavaScript pattern and antipattern collection that covers function patterns, design patterns, general patterns, literals and constructor patterns, object creation patterns, code reuse patterns, ReactJs patterns coming soon.',
  background_color: '#2196f3',
  theme_color: '#2196f3',
  start_url: '/',
  icons: [{
    src: path.resolve(`./${develop}/static/favicon/logo.png`,),
    sizes: [96, 128, 192, 256, 384, 512],
    destination: path.join('static', 'icons')
  }]
});

const SW = new SWPrecacheWebpackPlugin({
  cacheId: 'javascript-patterns',
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  minify: true,
  navigateFallback: PUBLIC_PATH + 'index.html',
  staticFileGlobsIgnorePatterns: [/\.map$/],
});

const definePlugin = new webpack.DefinePlugin({
  'process.env': {NODE_ENV: JSON.stringify('production')},
});

//============================================================
// Configs
const htmlConfig = {
  loader: 'html-loader',
  options: {minimize: isProd},
};

// Config img
const
  imgDev = {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'static/img/',
    },
  },
  imgProd = [
    imgDev,
    {
      loader: 'image-webpack-loader',
      options: {
        optipng: {optimizationLevel: 7},
        pngquant: {quality: '65-90', speed: 4},
        mozjpeg: {progressive: true, quality: 65},
      },
    },
  ],
  imgConfig = isProd ? imgProd : imgDev;

const
  jsonConfig = [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'static/json',
      },
    }];
//============================================================
// WebPack
const config = {
  devtool: sourceMap,

  entry: {
    index: SRC_DIR + '/index',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'styled-components',
    ]
  },

  output: {
    path: DIST_DIR + '/',
    filename: 'js/[name].[chunkhash].js',
    sourceMapFilename: '[file].map',
    publicPath,
  },

  module: {
    rules: [
      // HTML - loader
      {
        include: SRC_DIR,
        test: /\.html$/,
        use: htmlConfig,
      },
      // JS babel - loader
      {
        include: [
          path.resolve(__dirname, `${develop}`),
        ],
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      // IMG - loader
      {
        include: path.resolve(__dirname, `${develop}/static`),
        test: /\.(jpg|png)$/,
        use: imgConfig,
      },
      // JSON - via file-loader
      {
        include: path.resolve(__dirname, `${develop}/static/json`),
        test: /\.(json)$/,
        use: jsonConfig,
      },
    ],
  },

  devServer: {
    port: 3000,
    open: true,
    inline: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },

  // shortcuts
  resolve: {
    alias: {
      'root': path.resolve(__dirname, develop)
    },
  },

  plugins: isProd ? [
    cleanFolderProd,
    commonsChunk,
    definePlugin,
    favicon,
    htmlIndex,
    uglifyJs,
    pwaManifest,
    SW,
  ] : [
    commonsChunk,
    htmlIndex,
  ],
};
module.exports = config;