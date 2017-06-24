const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})

const asyncPlugin = new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'async'
})

const assetsPlugin = new HtmlWebpackIncludeAssetsPlugin({
    assets: ['styles.css'],
    append: true
})

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app.bundle.js?r='+ Math.floor(Math.random() * 1000)
    },
    module: {
        loaders: [{
            test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
        },{
            test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
        }]
    },
    plugins: [htmlPlugin, asyncPlugin, assetsPlugin]
}