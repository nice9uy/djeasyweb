const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    watch: true,
    entry: [
        "./static/src/js/tes.js",
        "./static/src/js/a.js",
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/dist'),
    },
    optimization: { 
        minimize: true,
        minimizer: [new TerserPlugin(
             {
                extractComments: true,
             }
        )],
     },
};