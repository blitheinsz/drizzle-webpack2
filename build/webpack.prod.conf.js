var path = require('path');
var webpack = require('webpack');
var ora = require('ora');
var rm = require('rimraf');
var chalk = require('chalk');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var NamedModulePlugin = require('./webpack.named.plugin');

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].chunk.[chunkhash].js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        }),
        // new webpack.NamedModulesPlugin(),
        new NamedModulePlugin(),
        new ExtractTextPlugin('[name].[contenthash].css'),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.[chunkhash].js' }),
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
        ])
    ]
});


var spinner = ora('building for production...');
spinner.start();

rm(path.resolve(__dirname, '../dist'), function(err) {
    if (err) throw err;
    webpack(webpackConfig, function(err2, stats) {
        spinner.stop();
        if (err2) throw err2;
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'));
            process.exit(1);
        }

        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ));
    });
});
