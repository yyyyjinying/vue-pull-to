var path = require('path');
var autoprefixer = require('autoprefixer');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'VuePulltorefresh',
    libraryTarget: 'umd',
    filename: 'vue-pulltorefresh.js',
    path: resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('example')],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('example')],
        options: {
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('example')],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [resolve('src'), resolve('example')],
      },
    ],
  },
};
