const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
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
        contentBase: '.',
        // proxy: {
        //     '/': 'http://tplink.local/'
        // },
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
