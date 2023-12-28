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
    navbar: './src/javascript/navbar.js',
    navbar4: './src/javascript/navbar4.js',
    navbar5: './src/javascript/navbar5.js',
    navbar8: './src/javascript/navbar8.js',
    slider1: './src/javascript/slider1.js',
    slider2: './src/javascript/slider2.js',
    show: './src/javascript/show.js',
    main: './src/javascript/main.js',
    moveDown: './src/javascript/move-down.js',
    menuStyleguide: './src/javascript/menu-styleguide.js',
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
      // {
      //   test: /\.(glb|gltf)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'models/[name].[ext]'
      //   }
      // },
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
        // { from: 'src/models', to: 'models' }
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Style guide
    new HtmlWebpackPlugin({
      template: './src/styleguide/home.html',
      filename: './styleguide/home.html',
      chunks: ['index', 'menuStyleguide']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide/logo.html',
      filename: './styleguide/logo.html',
      chunks: ['index', 'menuStyleguide']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide/typography.html',
      filename: './styleguide/typography.html',
      chunks: ['index', 'menuStyleguide']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide/colors.html',
      filename: './styleguide/colors.html',
      chunks: ['index', 'menuStyleguide']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide/images.html',
      filename: './styleguide/images.html',
      chunks: ['index', 'menuStyleguide']
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'main']
    }),

    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: './main.html',
      chunks: ['index']
    }),

    //Inspiration
    new HtmlWebpackPlugin({
      template: './src/inspiration.html',
      filename: './inspiration.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/inspiration/know-cocoa.html',
      filename: './inspiration/know-cocoa.html',
      chunks: ['index', 'navbar', 'slider2', 'menuStyleguide']
    }),

    new HtmlWebpackPlugin({
      template: './src/inspiration/book-hard-design.html',
      filename: './inspiration/book-hard-design.html',
      chunks: ['index', 'navbar', 'slider2', 'menuStyleguide']
    }),

    //About
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'moveDown', 'menuStyleguide']
    }),

    //Code
    new HtmlWebpackPlugin({
      template: './src/code.html',
      filename: './code.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/code/code-scss-functions.html',
      filename: './code/code-scss-functions.html',
      chunks: ['index', 'navbar4', 'menuStyleguide']
    }),

    //Design
    new HtmlWebpackPlugin({
      template: './src/design.html',
      filename: './design.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/design/design-thinker/part-1.html',
      filename: './design/design-thinker/part-1.html',
      chunks: ['index', 'navbar4', 'menuStyleguide', 'show']
    }),
    new HtmlWebpackPlugin({
      template: './src/design/design-thinker/part-2.html',
      filename: './design/design-thinker/part-2.html',
      chunks: ['index', 'navbar5', 'menuStyleguide', 'show']
    }),
    new HtmlWebpackPlugin({
      template: './src/design/design-method.html',
      filename: './design/design-method.html',
      chunks: ['navbar', 'index', 'slider1', 'menuStyleguide']
    }),
    new HtmlWebpackPlugin({
      template: './src/design/design-thinking-world.html',
      filename: './design/design-thinking-world.html',
      chunks: ['index', 'navbar8', 'menuStyleguide']
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
