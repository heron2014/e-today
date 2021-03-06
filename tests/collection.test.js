'use strict';

const test = require('tape');
const server = require('../lib/server.js');
const Collections = require('../lib/collection');
const Cheerio = require('cheerio');

test('GET collections/1 returns status code 200', (t) => {
  t.plan(1);

  server.inject({url: '/collections/1', method: 'GET'}, response => {
    t.equals(response.statusCode, 200, 'Status code is 200');
    t.end();
  });
});

test('GET /collections/50 displays message: No more daily images', (t) => {
  t.plan(2);

  server.inject({url: '/collections/50', method: 'GET'}, (response) => {
    let $ = Cheerio.load(response.payload);

    t.equals($('.info').text(), 'No more daily images', 'Message text is equal to: No more daily images');
    t.equals(response.statusCode, 200, 'Status code 200');
    t.end();
  });
});
