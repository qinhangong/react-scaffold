const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('dist/css.antd.css');
const extractLESS = new ExtractTextPlugin('dist/css.app.css');
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
                use: extractCSS.extract(['css-loader'])
            }, {
                test: /\.less/,
                use:extractLESS.extract([
                        { loader: 'css-loader', options: { modules: true,autoprefixer:false } },
                        "postcss-loader",
                        'less-loader',
                ])
            },{
                test:/\.(png|jpg|svg)$/,
                loader:'url-loader?limit=5000'
            }
        ]
    },
    devServer: {
        port: 8888,
        contentBase: path.join(__dirname, "dist"),
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-demo',
            template: 'assets/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        extractCSS,
        extractLESS,
    ]
}
