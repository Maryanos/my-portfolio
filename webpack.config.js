const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fse = require("fs-extra")

const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")
]

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap("Copy images", function() {
            fse.copySync("./app/assets/images", "./docs/assets/images") //changed dist to docs for git
        })
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: ["css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
}

let pages = fse.readdirSync("./app").filter(function(file) {
    return file.endsWith(".html")
}).map(function(page) {
    return new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`
    })
})

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: pages,
    module: {
        rules: [
            cssConfig
        ]
    }
}

if (currentTask == "dev") {
    cssConfig.use.unshift('style-loader')
    config.output = {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app") //generating absolute path
    }
    config.devServer = {
        onAfterSetupMiddleware: function(app, server) {
            watchFiles: ("./app/**/*.html") // /**/ any folder if nessesery, /* any html file
        },
        static: {
            directory: path.join(__dirname, "app"),
        },
        hot: true,   //Injecting JSS and CSS to the browser memory on the fly / Hot Module Replacement
        port: 3005,
        host: '192.168.1.11'
    }
    config.mode = "development"
}

if (currentTask == 'build') {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    })

    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'docs') //changed dist to docs for git
    }
    config.mode = 'production'
    config.optimization = {
        splitChunks: {chunks: 'all'},
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()]
    }
    config.plugins.push(
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
        )
  }

  module.exports = config
