const express = require('express');
require('dotenv').config();

const _ = require('lodash');

const app = express();

app.use(express.static(`${__dirname}/static`));

app.get('/*.js', (req, res) => {
  const params = _.split(req.originalUrl, '/');

  res.sendFile(`${__dirname}/static/${params[params.length - 1]}`);
});

app.get('/*.css', (req, res) => {
  res.sendFile(`${__dirname}/public${req.originalUrl}`);
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(process.env.PORT, process.env.HOST);

console.log(`running on http://${process.env.HOST}:${process.env.PORT}`);
