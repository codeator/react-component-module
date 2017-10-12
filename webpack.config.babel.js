import path from 'path'

module.exports = {
    entry: './src/app/boot.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src/app'),
            path.resolve('./node_modules')
        ]
    }
}