var webpack = require('webpack'),
    path = require('path'),
    yargs = require('yargs');
 
var libraryName = 'balinese-date-js-lib',
    plugins = [],
    outputFile;
 
if (yargs.argv.p) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({ 
            minimize: true,
            sourceMap: true
        })
    );
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}
 
var config = {
    entry: [
        __dirname + '/src/BalineseDate.ts'
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/build-dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [{ 
            test: /\.tsx?$/, 
            loader: 'tslint', 
            exclude: /node_modules/ 
        }],
        loaders: [{ 
            test: /\.tsx?$/, 
            loader: 'ts', 
            exclude: /node_modules/ 
        }]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: [ '', '.js', '.ts', '.jsx', '.tsx' ]
    },
    plugins: plugins,
    
    // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    }
};
 
module.exports = config;