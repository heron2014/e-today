'use strict';

const test = require('tape');
const server = require('../lib/server.js');

test("GET /notfound returns 404", (t) => {
  t.plan(1)

  server.inject({url: '/notfound', method: 'GET'}, response => {
    t.equal(response.statusCode, 404, 'statusCode 404');
    t.end();
  });
});
