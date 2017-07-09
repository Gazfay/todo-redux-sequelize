const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./../webpack.config');

function initWebpack(app) {

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, 
    { 
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true
    })
  );

  app.use(webpackHotMiddleware(compiler));

}

module.exports = initWebpack;