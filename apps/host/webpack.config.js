const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');
module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/host'),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host_app_module',
      filename: 'RemoteEntry.js',
      publicPath: 'auto',
      remotes: {
        auth: `http://localhost:3200/_next/static/chunks/remoteEntry.js`,
        // chat: `chat@http://localhost:3100/_next/static/chunks/remoteEntry.js`,
      },
    }),



    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      // assets: ['./src/favicon.ico', './src/assets'],
      // styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
