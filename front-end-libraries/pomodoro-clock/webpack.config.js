const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './image',
                            publicPath: './image'
                        }
                    }
                ]
            },
            {
                test: /\.wav$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './wav',
                            publicPath: './wav'
                        }
                    }
                ]
            },
            {
              test: /\.svg$/,
              use: 'svg-inline-loader?classPrefix'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development';
        config.devtool = 'inline-source-map';
    } else if (argv.mode === 'production') {
        /*config.mode = 'production';
        config.optimization = {
            splitChunks: {
                chunks: 'all'
            }
        }*/
    }
    return config;
};