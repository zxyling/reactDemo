const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const bs = require('browser-sync').create();

config.entry.unshift('webpack-hot-middleware/client?reload-true');

let app = new (require('express'))();

let port = 9000;

let complier = webpack(config);

app.use(webpackDevMiddleware(complier, {publicPath: '/assets/'}));

app.use(webpackHotMiddleware(complier));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'src/index.html')))

app.listen(port);
