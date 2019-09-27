var path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoderPlugin = require('vue-loader/lib/plugin')

module.exports = {
        entry: path.join(__dirname, './src/main.js'),
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'main.js'
        },
        devServer: {
            open: true,
            port: 3030,
            contentBase: './src',
            hot: true
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.join(__dirname, './src/index.html'),
                filename: 'index.html',
            }),
            new VueLoderPlugin({})
        ],
        module: {
            rules: [{
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                },
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    use: ['url-loader']
                },
                // {
                //     test: /\.js$/,
                //     exclude: /(node_modules|bower_components)/,
                //     use: {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
                // }

                ]
            }
        }