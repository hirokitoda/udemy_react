udemy_react

package.jsonに追加
"scripts": {
  "start": "webpack-dev-server --mode development --open"
},

webpack.configを変更
module: {
      rules: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      }],
    },

srcの綴りをscrと書いてしまう癖がある、エラーした時は綴りをチェック

JSXを使用する際の拡張子は動画では.jsだが.jsxにするとうまくいく

.eslintrc.jsを変更
module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true
  }
};

webpack.config.jsのmodule.exportのentryをjsx対応にさせる
entry: [
  './src/index.jsx',
],

atom commond+option+control+Lでリロード

ステートレスthis.state={...}を含まないcomponent

state propsについて
https://qiita.com/kyrieleison/items/78b3295ff3f37969ab50

is defined but never usedは基本無視

requireとは
https://qiita.com/uryyyyyyy/items/b10b012703b5396ded5a

propTypeをpropsTypeって間違えがち

paramsとは

rec24でconsole画面にObjectと表示されていない

GoogleMapの料金体系
https://qiita.com/wf9a5m75/items/87fad6c484378c0519ec

GoogleMapの"For development purposes only"

コンポーネント入門（props/state）
https://qiita.com/KeitaMoromizato/items/0da6c8e4264b1f206451

requiredするとは

GeocodeResultのlocationのobjectOf

Use object destructuring
https://qiita.com/mysticatea/items/c1a4e68266f1f3c021b8

Prefer default export
exportが１つなのにdefaultを使ってない

Newline required at end of file but not found
ファイルの最後に空白が必要
https://www.kabanoki.net/1380

axiosについて
https://qiita.com/gcyagyu/items/4d186df2e90c53228951
axios
    .get(エンドポイント, { params: {送りたいパラメーターの指定}　})
    .then((results) => {
        // 通信に成功してレスポンスが返ってきた時に実行したい処理
    }
    .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
    }

    Unexpected newline before
    その改行おかしいよ
