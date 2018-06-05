const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react-demo'
        }),
        new CleanWebpackPlugin(['dist']),
    ]
}
