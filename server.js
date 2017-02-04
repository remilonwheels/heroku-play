'use strict';

const serverRequest = require('bluebird').promisifyAll(require('request'));
const Promise = require('bluebird');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7777;
const $ = require('jquery');

app.use(express.static('public'));

app.get('/', (request, response) => response.sendFile('index.html'));

app.get('/ajax', (request, response) => {
  //API for raw data of parking facilities
  serverRequest.getAsync('https://data.seattle.gov/api/views/3neb-8edu/rows.json')
  .then( res => response.send(res));
});

app.listen(PORT, () => console.log(`Locked and loaded on ${PORT}`));
