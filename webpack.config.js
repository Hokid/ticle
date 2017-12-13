const path = require('path');
const ClosureCompilerPlugin = require('closure-webpack-plugin');

const root = __dirname;
const workerPaht = path.resolve(root, './src/lib/Timer.Worker.js');
const entryPath = path.resolve(root, './src/index.js');
const config = {
    entry: entryPath,
    output: {
        path: path.resolve(root, './build'),
        filename: 'ticle.js',
        library: 'Ticle',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
            {
                test: workerPaht,
                exclude: /node_modules/,
                loader: 'worker-loader',
                options: {
                    inline: true,
                    fallback: false
                }
            }
        ]
    },
    plugins: []
};


if (process.env.NODE_ENV === 'production') {
    config.stats = 'detailed';
    config.plugins.push(
        new ClosureCompilerPlugin({
            mode: 'STANDARD'
        },{
            language_in: 'ECMASCRIPT5',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'SIMPLE',
            warning_level: 'QUIET'
        })
    );
}

module.exports = config;
