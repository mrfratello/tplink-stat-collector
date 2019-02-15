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
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        },
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
