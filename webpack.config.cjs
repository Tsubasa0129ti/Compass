const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // エントリーポイントの設定
    entry: {
      app: `./src/main/vue/pages/app.ts`, // 以下にファイルの追加を行う。
    },
    //ソースマップの設定（あまり理解していない）
    devtool: 'inline-source-map',
    
    // 出力先の設定
    output: {
        path: path.resolve(__dirname, './src/main/resources/static/js'),
        filename: "[name].js",
        clean: true, //ToDo: 効いているかを確認する
    },

    devtool: "hidden-source-map",

    // loaderの設定
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    process.env.NODE_ENV !== "production"
                        ? "vue-style-loader"
                        : MiniCssExtractPlugin,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                            sassOptions: {
                                //disable fibers option
                                fiber: false,
                                sourceMap: true,
                            }
                        }
                    }
                ]
            }
        ],
    },

    resolve: {
        extensions: ['.ts', '.js',]
    },

    // プラグインの設定
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            //determines the name of each output CSS file
            filename: "[name].css",
        }),
    ],
    
}