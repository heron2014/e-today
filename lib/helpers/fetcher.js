'use strict';

/**
* Return body - html page for the parsed url
* @param {String} url
* @param {Function} next - callback with error or body
*/

const Request = require('request');

const fetcher = (url, next) => {

  Request(url, (error, response, body) => {

    if (!error && response.statusCode === 200) {
      return next(body);
    } else {
      return next(new Error('Error: fetch failed'));
    }
  });
}

module.exports = fetcher;
