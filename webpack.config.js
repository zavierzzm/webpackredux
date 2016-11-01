/* webpack.config.js */

var webpack = require('webpack');

var config = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
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
    devServer: {
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;