'use strict';

const Inert = require('inert');
const Hapi = require('hapi');
const Vision = require('vision');
const Hoek = require('hoek'); //utility library for Hapi
const Handlebars = require('handlebars');
const HapiError = require('hapi-error');

const server = new Hapi.Server();

//custom plugins
const Collection = require('./collection');

server.connection({
  port: Number(process.env.PORT || 3000),
  routes: {cors: true}
});

const Plugins = [Inert, Vision, Collection, HapiError];

server.register(Plugins, error => {
  Hoek.assert(!error, 'No errors registering plugins');

  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname + '/../views',
    path: '.',
    layout: 'default',
    layoutPath: 'layout'
  });

  server.start(err => {
    Hoek.assert(!err, 'No errors starting server');
    console.log('Server is running at: ', server.info.uri);
  });
});

module.exports = server;
