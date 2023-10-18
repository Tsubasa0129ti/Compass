
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    // エントリーポイントの設定
    entry: {
      app: `./src/main/vue/pages/app.js`, // 以下にファイルの追加を行う。
    },
    
    // 出力先の設定
    output: {
        path: `${__dirname}/dist/pages`,
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
                test: /\.js$/, // ToDo: tsに変更する。（現在jsなのは、loader等が異なることを懸念している）
                loader: 'babel-loader',
            },
            {
                test: /\.css$/, // ToDo: scssに変更する。（上記と同様の理由）
                loader: 'css-loader',
            }
        ],
    },

    // プラグインの設定
    plugins: [
        new VueLoaderPlugin(),
    ],
    
}