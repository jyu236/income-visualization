// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/chart.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    mode: 'development',
    devtool: 'source-map'
};
