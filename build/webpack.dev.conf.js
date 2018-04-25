var merge = require('webpack-merge');
var express = require('express');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackdevMiddleWare = require('webpack-dev-middleware');
var webpackhotMiddleWare = require('webpack-hot-middleware');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var NamedModulePlugin = require('./webpack.named.plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.conf');

var jsonServer = require('json-server'),
    webpackConfig,
    devMiddleware,
    hotMiddleware,
    compiler,
    app,
    server,
    port = 8081,
    uri = 'http://localhost:' + port;

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
                // use: ['style-loader', 'css-loader']
            }
        ]
    },
    // cheap-module-eval-source-map is faster for development
    // devtool: '#cheap-module-eval-source-map',
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'development'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new NamedModulePlugin(),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../images'),
                to: 'images',
                ignore: ['.*']
            }
        ]),
        new FriendlyErrorsPlugin()
    ]
});
app = express();

server = jsonServer.create();
server.use(jsonServer.defaults());
server.use(jsonServer.router('./data/todos.json'));
app.use('/api', server);

compiler = webpack(webpackConfig);
devMiddleware = webpackdevMiddleWare(compiler, {
    publicPath: '/',
    quiet: true
});

hotMiddleware = webpackhotMiddleWare(compiler, {
    log: false,
    heartbeat: 2000
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))
console.log('> Starting dev server...');
devMiddleware.waitUntilValid(function() {
    console.log('> Listening at ' + uri + '\n');
});

app.listen(port);