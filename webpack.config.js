// https://qiita.com/tsuuuuu_san/items/582854a4043d8a1db1c9
const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: __dirname + '/src',
    entry: {
      'application': './es2015/app',
    },
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader", 
        }
      ]
    },
    devServer: {
        contentBase: 'dist',
        port: 3000
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    resolve: {
      extensions: ['.js'],
      alias: {
          '$'     : 'jquery',
      }
  },
  };

// context
//     entryオプションを解決するためのベースとなるディレクトリ
// entry
//     エントリーポイントの設定
// output
//     ファイル出力の設定
// module
//     モジュールのオプション