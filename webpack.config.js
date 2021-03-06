const {VueLoaderPlugin} = require('vue-loader');
const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
    }
module.exports = {
    entry: {
        index: "./src/main.js"  //webpack的入口文件，指定将哪个文件进行打包
    },
    module: {
        rules: [{
            test: /\.vue$/,//vue文件加载器
            use: ['vue-loader']
        }, {
            test: /\.js$/,//js文件加载器
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,//less文件加载器
            loaders: ["style-loader", "css-loader", "less-loader"]
        }, {
            test: /\.css$/,//css文件加载器
            loaders: ["style-loader", "css-loader"]
        },{
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //图片文件加载器
            loader: 'url-loader',
            exclude: [resolve('src/assets/img')],
            options: {
            limit: 10000,
            }
        },
    ]},
    plugins: [
        // 添加VueLoaderPlugin，以响应vue-loader
        new VueLoaderPlugin()
    ]
};