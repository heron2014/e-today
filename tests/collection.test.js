'use strict';

const test = require('tape');
const server = require('../lib/server.js');
const Collections = require('../lib/collection');

test('Access collections/1 endpoint and receive status code 200', (t) => {
  t.plan(1);

  server.inject({url: '/collections/1', method: 'GET'}, response => {
    t.equals(response.statusCode, 200, 'Status code is 200');
    t.end();
  });
});
