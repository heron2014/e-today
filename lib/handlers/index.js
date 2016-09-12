'use strict';

/*
* Return the view item which display the specific image based on id
*/

const Fetcher = require('../helpers/fetcher');
const Cheerio = require('cheerio');

module.exports = (request, reply) => {

  let id = Number(request.params.id);
  let nextPage;
  let prevPage;

  Fetcher('http://www.ebay.co.uk/today', html => {

    let $ = Cheerio.load(html);
    let imgParent = $('.big-hero-image .thumb')[id - 1];
    //check if imgParent exist if yes access children property
    let imgSrc = imgParent ? imgParent.children[0].attribs['data-src'] : '';
    let totalImg = $('.big-hero-image .thumb').length;

    if (id > 1) {
      prevPage = `/collections/${id - 1}`;
    }

    if (id < totalImg) {
      id++;
      nextPage = `/collections/${id}`;
    }

    return reply.view('item', {
      imgSrc,
      id: request.params.id,
      totalImg,
      nextPage,
      prevPage
    });
  });
}
