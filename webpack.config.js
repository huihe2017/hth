var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

// 定义当前是否处于开发debug阶段
var isDebug = JSON.stringify(JSON.parse(process.env.DEBUG || 'false'));

// 根据isDebug变量定义相关config变量
var configVarObj = {};
if (isDebug === 'true') {
    console.log('I am in debuging............');
    configVarObj = {
        htmlPath: 'index.html',  // 定义输出html文件路径
        // devtool: 'cheap-source-map' // 生成sourcemap,便于开发调试
        devtool: 'eval' // 生成sourcemap,便于开发调试
    };
} else {
    console.log('I am in releasing............');
    configVarObj = {
        htmlPath: /*cjebTemplateFolder + */'/index.html',  // 定义输出html文件路径
        devtool: ''
    };
}

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        // 输出文件名
        filename: 'js' + '/[name].min.js?[hash]',
        // cmd、amd异步加载脚本配置名称
        chunkFilename: 'js' + '/[name].chunk.js?[hash]',
        publicPath: ''
    },
    module: {
        loaders: [
            // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },//支持es6
            // {test:/\.js?$/,exclude: /node_modules/,loader:'jsx-loader?harmony'},//支持react
             {test:/\.js?$/,exclude: /node_modules/,loader:'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'},//同时支持es6 react或者
            //{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react','latest']}}, //同时支持es6 react

            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:8]"
            },
            {test: /\.scss$/, loader: "style!css!sass"}, //sass加载器
            {
                test:/\.(png)|(jpg)$/,
                loader: "url?limit=50000"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devtool: configVarObj.devtool,
    plugins: [
        new HtmlwebpackPlugin({
            title: 'test',
            template: path.join(__dirname, './index.html'),
            filename: 'index.html',
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new ExtractTextPlugin("output/[name].css"),//独立css文件
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'js/[name].chunk.js?[hash]'),
        /* new webpack.ProvidePlugin({
           "$": "jquery"
        }),*/
        //定义全局变量
        new webpack.DefinePlugin({
            __DEV__: isDebug
        })
    ],
    devServer: {
        disableHostCheck: true
    }
};
