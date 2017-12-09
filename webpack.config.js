const path = require('path');
const root = __dirname;

module.exports = {
    entry: path.resolve(root, './src/index.js'),
    output: {
        path: path.resolve(root, './build'),
        filename: 'ticle.js',
        chunkFilename: '[name].js',
        library: 'Ticle',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.Worker\.js$/,
                exclude: /node_modules/,
                loader: 'worker-loader',
                options: {
                    inline: true,
                    fallback: false
                }
            }
        ]
    }
}
