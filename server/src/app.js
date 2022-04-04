const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const cors = require('cors');
const socketio = require('@feathersjs/socketio');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const logger = require('./logger');

const sequelize = require('./sequelize');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const app = express(feathers());

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

// Load app configuration
app.configure(configuration());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

// feathers-blob service
const blobStorage = fs(`${__dirname}/uploads`);

app.use('/uploads', (req, res) => {
  res.sendFile(`${__dirname}${req.originalUrl}`);
});

app.configure(sequelize);

app.configure(middleware);
app.configure(services);

app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
