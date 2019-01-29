const path = require('path');
const nodeExternal = require('webpack-node-externals');
module.exports = {
    entry: {
        main: './server.js'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    target:'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternal()]
}