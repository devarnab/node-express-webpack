import 'dotenv/config';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.dev.js';

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', function (req, res) {
  res.send('Ok, Server is running!');
});

app.get('/test', function (req, res) {
  res.send('Test route!');
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
