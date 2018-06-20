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
