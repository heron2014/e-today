'use strict';

/**
* Define route for managing collections
*  GET /collections/{id} - Display image with specific id
* reference: http://hapijs.com/tutorials/plugins#creating-a-plugin
*/

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
