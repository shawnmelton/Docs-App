const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const htmlConfig = new HtmlWebPackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})

const scriptExt = new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'async'
})

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
        },{
            test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
        }]
    },
    plugins: [htmlConfig, scriptExt]
}