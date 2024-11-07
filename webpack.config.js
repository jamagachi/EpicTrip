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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Define plugins to extend webpack functionality
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development', // Title of the generated HTML file
      template: path.resolve(__dirname, './client/public/index.html'), // Template HTML file to use
    }),
  ],
  // Define settings for the development server
  devServer: {
    static: {
      publicPath: '/dist', // Serve files from the dist directory
      directory: path.resolve(__dirname, 'dist'), // Directory to serve
    },
    historyApiFallback: true,
    port: 8080, // Port to run the development server
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: [
      {
        context: ['/api'], // Match API requests
        target: 'http://localhost:3000', // Proxy target; where your backend is running
        secure: false,
        changeOrigin: true, // This helps with some CORS issues
      },
    ],
  },
};
