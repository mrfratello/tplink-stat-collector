const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './resources/app/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'dist/bundle.js'
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: './resources',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true
            }
        },
        port: 5000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
