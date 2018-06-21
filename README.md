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
