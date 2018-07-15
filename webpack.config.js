var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');
 
var libraryName = 'BalineseDate',
    libraryFileName = 'balinese-date-js-lib',
    plugins = [],
    outputFile;
 
if (yargs.argv.p) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({ 
            minimize: true,
            sourceMap: true
        })
    );
    outputFile = libraryFileName + '.min.js';
} else {
    outputFile = libraryFileName + '.js';
}

var config = {
    entry: [
        __dirname + '/src/BalineseDate.ts'
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/umd'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    emitErrors: true,
                    failOnHint: true
                }
            },
            {
                test: /\.tsx?$/, 
                loader: 'ts-loader', 
                exclude: /node_modules/ 
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    plugins: plugins
};
 
module.exports = config;