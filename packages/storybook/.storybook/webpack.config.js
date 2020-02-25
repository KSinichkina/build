const path = require('path');
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const modulesPath = path.resolve(__dirname);
module.exports = {
  plugins: [
    // new WebpackBuildNotifierPlugin({
    //   title: 'React Example Storybook Build',
    //   warningSound: true,
    //   failureSound: true,
    // }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist)/,
        include: [/node_modules\/core/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|svg|wav|mp3)(\?.*)?$/,
        loader: 'file-loader',
        query: { name: 'static/media/[name].[hash:8].[ext]' },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [require('postcss-assets')()] },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
