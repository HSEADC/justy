const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: './main.html'
    }),

    //Inspiration
    new HtmlWebpackPlugin({
      template: './src/inspiration.html',
      filename: './inspiration.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/inspiration/studios.html',
      filename: './inspiration/studios.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/inspiration/media.html',
      filename: './inspiration/media.html'
    }),

    //About
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),

    //Technologies
    new HtmlWebpackPlugin({
      template: './src/technologies.html',
      filename: './technologies.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/technologies/mockups.html',
      filename: './technologies/mockups.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/technologies/neural-networks.html',
      filename: './technologies/neural-networks.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/technologies/programs.html',
      filename: './technologies/programs.html'
    }),

    //News
    new HtmlWebpackPlugin({
      template: './src/news.html',
      filename: './news.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/channels.html',
      filename: './news/channels.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/books.html',
      filename: './news/books.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/films.html',
      filename: './news/films.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/code.html',
      filename: './news/code.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/recommendations.html',
      filename: './news/recommendations.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/typography.html',
      filename: './news/typography.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/our-articles.html',
      filename: './news/our-articles.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/news/hse-help.html',
      filename: './news/hse-help.html'
    }),

    //Contacts
    new HtmlWebpackPlugin({
      template: './src/contacts.html',
      filename: './contacts.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contacts/students.html',
      filename: './contacts/students.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contacts/job.html',
      filename: './contacts/job.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
