'use strict';

const Inert = require('inert');
const Hapi = require('hapi');
const Vision = require('vision');
const Hoek = require('hoek'); //utility library for Hapi

const server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT || 3000),
  routes: {cors: true}
});

const Plugins = [Inert, Vision];

server.register(Plugins, error => {
  Hoek.assert(!error, 'No errors registering plugins');

  server.start(err => {
    Hoek.assert(!err, 'No errors starting server');
    console.log('Server is running at: ', server.info.uri);
  });
});

module.exports = server;
