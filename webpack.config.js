// https://qiita.com/tsuuuuu_san/items/582854a4043d8a1db1c9
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
    }
  };

// context
//     entryオプションを解決するためのベースとなるディレクトリ
// entry
//     エントリーポイントの設定
// output
//     ファイル出力の設定
// module
//     モジュールのオプション