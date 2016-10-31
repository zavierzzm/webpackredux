/* webpack.config.js */

var webpack = require('webpack');

var ROOT_PATH = fullPath('../');
var SRC_PATH = ROOT_PATH + '/src';
var DIST_PATH = ROOT_PATH + '/dist';

var config = {
    context: SRC_PATH,
    entry: {
        app: ['./pages/app.js']
    },
    output: {
        path: DIST_PATH,
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve: {},
    plugins: []
};

module.exports = config;