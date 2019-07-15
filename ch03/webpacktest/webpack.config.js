module.exports = {
    mode : "production", //development , production이 파일크기 작음
    entry : __dirname + '/src/app.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    }
}