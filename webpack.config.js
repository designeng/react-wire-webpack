var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

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
        new webpack.ContextReplacementPlugin(
                /app ^\.\/.*$/, 
                /.js$/)
        // new LiveReloadPlugin({port: 8081}),
    ],
    devtool: 'source-map'
}