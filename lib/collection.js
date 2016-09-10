'use strict';

const getItem = require('./handlers');

exports.register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/collections/{id}',
    config: {
      auth: false
    },
    handler: getItem
  });

  return next();
}

exports.register.attributes = {
  name: 'Collection'
}
