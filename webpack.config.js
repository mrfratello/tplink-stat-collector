const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'dist/images'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    outputPath: 'dist/fonts'
                  }
                }]
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
        port: 5000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'dist/style.css'
        })
    ]
};
