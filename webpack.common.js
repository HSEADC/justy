const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
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
        test: /\.(glb|gltf)$/i,
        loader: 'file-loader',
        options: {
          publicPath: './',
          name: '[name].[ext]',
          esModule: false
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        }
      ]
    }),

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
      template: './src/code.html',
      filename: './code.html'
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

    //Design
    new HtmlWebpackPlugin({
      template: './src/design.html',
      filename: './design.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/design-thinker/part-1.html',
      filename: './design/design-thinker/part-1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/design-method.html',
      filename: './design/design-method.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/darkPattern.html',
      filename: './design/darkPattern.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/heuristics.html',
      filename: './design/heuristics.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/datadriven.html',
      filename: './design/datadriven.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/familiarthings.html',
      filename: './design/familiarthings.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/surveyandvalidate.html',
      filename: './design/surveyandvalidate.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/uxSurvey.html',
      filename: './design/uxSurvey.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/topTenQuestions.html',
      filename: './design/topTenQuestions.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/notifications.html',
      filename: './design/notifications.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/saas.html',
      filename: './design/saas.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/design/chatGpt.html',
      filename: './design/chatGpt.html'
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
