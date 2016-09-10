'use strict';

const test = require('tape');
const Fetcher = require('../lib/helpers/fetcher');

test('Attempt to parse get request with wrong url', (t) => {
  t.plan(1);

  Fetcher('http://www.ebay.co.uk/wrongUrl', (error, response, body) => {
    t.equals(error instanceof Error, true, 'Error object is thrown when parsing wrong url');
    t.end();
  });
});
