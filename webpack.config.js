const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry point of our app
  // Set the mode to either 'production' or 'development' based on the environment variable.
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // Define the entry point of the application
  entry: ['./client/src/index.js'], // Main file to start bundling
  // Define the output settings
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'dist'), // Directory to save the output file
  },
  // Define module rules for different file types
  module: {
    rules: [
      {
        test: /\.jsx?/, // Match files ending in .js or .jsx
        exclude: /node_modules/, // Exclude files in node modules
        loader: 'babel-loader', // Use babel-loader to transpile JS files
        options: {
          // For babel-loader 8.x | Babel 7.x
          presets: ['@babel/preset-env', '@babel/preset-react'],
          // vs. ['env', 'react'] for babel-loader 7.x | babel 6.x
        },
      },
      {
        test: /\.s?css/, // Match files ending in .css or .scss
        use: ['style-loader', 'css-loader', 'sass-loader'], // Use loaders to process CSS and SCSS files
      },
    ],
  },
  // Define plugins to extend webpack functionality
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development', // Title of the generated HTML file
      template: 'index.html', // Template HTML file to use
    }),
  ],
  // Define settings for the development server
  devServer: {
    static: {
      publicPath: '/build', // Serve files from the build directory
      directory: path.resolve(__dirname, 'build'), // Directory to serve
    },
    port: 8080, // Port to run the development server
    proxy: [
      {
        context: ['/api'], // Match API requests
        target: 'http://localhost:5000', // Proxy target
      },
    ],
  },
};
