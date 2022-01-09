const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src-tauri/src/app.js',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'src-tauri/public/dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src-tauri/public'),
        },
        compress: true,
        port: 9000,
    },
};
