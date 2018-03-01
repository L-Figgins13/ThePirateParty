const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react','react-dom','react-router','isomorphic-fetch','babel-polyfill', 'socket.io-client'],
    },
    output:{
        path: __dirname + './static',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ],

    module: {
        loaders:[
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
                }
            },
        ]
    },

    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*' : {
                target: 'http://localhost:3000'
            }
        }
    },

    devtool: 'source-map'
}