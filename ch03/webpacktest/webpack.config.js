module.exports = {
    devtool : 'source-map',
    mode : "development", //development , production이 파일크기 작음
    entry : __dirname + '/src/main.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    devServer : {
        contentBase : "./public",
        inline : true,
        historyApiFallback : true,
        port : 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    }
}