# e-today

Basic interface for populating images from ebay-today

> Try it: https://e-today.herokuapp.com/collections/1

[![Build Status](https://travis-ci.org/heron2014/e-today.svg?branch=master)](https://travis-ci.org/heron2014/e-today)
[![codecov](https://codecov.io/gh/heron2014/e-today/branch/master/graph/badge.svg)](https://codecov.io/gh/heron2014/e-today)
[![Dependency Status](https://david-dm.org/heron2014/e-today.svg)](https://david-dm.org/heron2014/e-today)
[![devDependency Status](https://david-dm.org/heron2014/e-today/dev-status.svg)](https://david-dm.org/heron2014/e-today#info=devDependencies)


### What

Project currently has only one api:
 - ```/collections/{id}``` , ```id```- limited unique number, e.g starts from 1.
 Above api creates get request to ```http://www.ebay.co.uk/today``` and populates images. Ids for the images are based on the images order on the page.

### How to run this repo:

- clone this repo
- ```npm install```
- ```npm start``` - go to http://localhost:3000/collections/1
- ```npm test``` - to run tests
