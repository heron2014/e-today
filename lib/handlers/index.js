'use strict';

/*
* Return the view item which display the specific image based on id
*/

const Fetcher = require('../helpers/fetcher');
const Cheerio = require('cheerio');

module.exports = (request, reply) => {

  let id = Number(request.params.id);
  Fetcher('http://www.ebay.co.uk/today', (err, html) => {

    let $ = Cheerio.load(html);
    let imgSrc = $('.big-hero-image .thumb')[(id - 1).toString()];

    if (imgSrc) {
      imgSrc = imgSrc.children[0].attribs['data-src'];
      return reply.view('item', {imgSrc: imgSrc});
    } else {
      return reply.view('item', {msg: 'No more daily images'});
    }
  });
}
