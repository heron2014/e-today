'use strict';

const Inert = require('inert'); // Static file and directory handlers for Hapi
const Hapi = require('hapi');
const Vision = require('vision'); //Templates rendering plugin
const Hoek = require('hoek'); // utility library for Hapi
const Handlebars = require('handlebars');

const server = new Hapi.Server();

//custom plugins
const Collection = require('./collection');
const ErrorPlugin = require('./error');
const Assets = require('./assets');

server.connection({
  port: Number(process.env.PORT || 3000),
  routes: {cors: true}
});

const Plugins = [Inert, Vision, Collection, Assets, ErrorPlugin];

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
