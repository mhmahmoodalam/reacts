var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public/build/');
var serverPath = path.resolve(__dirname, 'src/server', 'app.js');
var browserPath = path.resolve(__dirname, 'src/client', 'main.js');
var fs= require('fs');
var definePlugin = new Webpack.DefinePlugin({
  __DEV__: JSON.stringify(
                JSON.parse(process.env.BUILD_DEV || 'true')
          ),
  __PROD__: JSON.stringify(
                JSON.parse(process.env.BUILD_PROD || 'false')
          )
});

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = [
  {
    target: 'node',
    devtool: 'source-map',
    debug: true,
    entry: {
      app: [serverPath]
    },
    output: {
      path: buildPath,
      filename: 'server.js',
      libraryTarget: 'umd'
    },
    externals: nodeModules,
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /nodeModulesPath/,
          loader: 'babel'
        },
        {
          test: /\.ejs$/,
          loader: 'ejs-loader?variable=data'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      alias: {
        '$history': 'history/lib/createLocation'
      }
    },
    plugins: [definePlugin]
  },
  {
    devtool: 'eval',
    debug: true,
    entry: {
      app:['./src/client/main.js']
    },
    output: {
      path: buildPath,
      publicPath: '/build/',
      filename: 'browser.js'
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          exclude: /nodeModulesPath/
        },
        {
          test: /\.jsx?$/,
          exclude: /nodeModulesPath/,
          loader: 'babel-loader'
        },
        {
          test: /\.ejs$/,
          loader: 'ejs-loader?variable=data',
          exclude: /nodeModulesPath/
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      alias: {
        '$history':'history/lib/createBrowserHistory'
      }
    },
    plugins: [new Webpack.NoErrorsPlugin(), definePlugin]
  }
];
