const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }, {
                test: /\.less/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true } },
                    'less-loader'
                ]
            },{
                test:/\.(png|jpg|svg)$/,
                loader:'url-loader?limit=50'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8888
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-demo',
            template: 'assets/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
    ]
}
