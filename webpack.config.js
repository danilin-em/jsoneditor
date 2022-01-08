const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src-tauri/public/app.js',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'node_modules/jsoneditor/dist' },
            ],
        }),
    ],
    output: {
        path: path.join(__dirname, 'src-tauri/public/dist'),
    },
};
