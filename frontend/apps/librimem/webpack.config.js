// import { composePlugins, withNx } from '@nrwl/webpack'
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { Configuration } = require('webpack');
const path = require('path');

module.exports = (config) => {
  config.mode = 'production';
  config.entry = './src';
  config.module = {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.js$/,
        exclude: [/node_modules/, /json/],
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
      },
    ],
  };
  config.plugins = [
    ...config.plugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './.well-known',
        },
      ],
    }),
  ];
  return config;
};
