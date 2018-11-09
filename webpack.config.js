var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var slug = require('remark-slug');
var normalizeHeadings = require('remark-normalize-headings');
var graphviz = require('remark-graphviz');
var gridTables = require('remark-grid-tables');
var collapse = require('remark-collapse');
var bracketedSpans = require('remark-bracketed-spans');
var bookmarks = require('remark-bookmarks');
var autolinkHeadings = require('remark-autolink-headings');
var attr = require('remark-attr');

module.exports = {
  entry: "./src/index.js",
  output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
        'src',
        'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /.mdx?$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: '@mdx-js/loader',
                options: {
                    mdPlugins: [slug, normalizeHeadings, graphviz, gridTables, bracketedSpans, bookmarks, autolinkHeadings, attr]
                }
            }
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ])
  ]
};
