var LiveReloadPlugin = require('webpack-livereload-plugin');
// var UmdRequirePlugin = require('umd-require-webpack-plugin');

module.exports = {
    entry: {
        index: __dirname + '/app/index.js'
    },
    // entry: __dirname + '/app/test.js',
    output: {
        filename: './public/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new UmdRequirePlugin()
        // new LiveReloadPlugin({port: 8081}),
    ],
    devtool: 'source-map'
}