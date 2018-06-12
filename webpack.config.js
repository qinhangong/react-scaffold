const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'css/public.css',
    disable: process.env.NODE_ENV === 'development' ? true : false,
});
const extractLESS = new ExtractTextPlugin({
    filename: 'css/app.css',
    disable: process.env.NODE_ENV === 'development' ? true : false,
});

module.exports = {
    mode: process.env.NODE_ENV || 'development',
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
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: 'css-loader',
                }),
            }, {
                test: /\.less/,
                exclude: /node_modules/,
                use: extractLESS.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { modules: true, autoprefixer: false } },
                        { loader: "postcss-loader" },
                        { loader: "less-loader" }
                    ]
                })
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=5000'
            }
        ]
    },
    devServer: {
        port: 8888,
        contentBase: path.join(__dirname, "dist"),
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-demo',
            template: 'assets/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        extractLESS,
    ]
}
