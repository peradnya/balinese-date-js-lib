const path = require('path');

const libraryName = "BalineseDate";
const libraryFileName = "balinese-date-js-lib";

const config = {
    entry: path.join(__dirname, "src", libraryName + ".ts"),
    output: {
        path: path.join(__dirname, "umd"),
        library: libraryName,
        libraryTarget: "umd2",
        umdNamedDefine: true,
        globalObject: "this"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/, 
                enforce: "pre",
                use: [{ 
                        loader: "tslint-loader",
                        options: {
                            emitErrors: true,
                            failOnHint: true
                        }
                    }],
                exclude: [/node_modules/]
            },
            {
                test: /\.ts$/, 
                use: [{ loader: "ts-loader" }],
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        modules: [path.resolve("./src"), path.resolve("./node_modules")],
        extensions: [".js", ".ts"]
    },
}

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.output.filename = libraryFileName + ".js";
    } else if (argv.mode === "production") {
        config.output.filename = libraryFileName + ".min.js";
    }

    return config;
};
