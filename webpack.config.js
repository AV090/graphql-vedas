const path = require('path');
const nodeExternal = require('webpack-node-externals');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = (env, args) => {
    let plugins = [];
    let isWatch = false;
    if (args.mode && args.mode == 'development') {
        plugins.push(new HotModuleReplacementPlugin);
        isWatch = true;
    }
    return ({
        entry: {
            main: './server.js'
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
            publicPath: '/',
            hotUpdateChunkFilename: 'hot/hot-update.js',
            hotUpdateMainFilename: 'hot/hot-update.json'
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternal()],
        'plugins': plugins,
        watch: isWatch,
        watchOptions: {
            ignored: /node_modules/
          }
    })
}