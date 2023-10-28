import path from "path";
import { VueLoaderPlugin } from "vue-loader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from 'url';
import sass from "sass";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
                            implementation: sass,
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
        alias: {
            // 以下を有効化するとパフォーマンスが低下する。完全ビルドが必要になるケースが現れなければコメントアウトしたままとする。
            //vue$: 'vue/dist/vue.esm-bundler.js'
        },
        extensions: ['.ts', '.js', '.vue']
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