'use strict';

const events = require('./events');
const client = require('./client');
const driver = require('./driver');

let time = new Date();

events.on('pickup', (payload) => {
  console.log('payload received');
  console.log('pickup ' + time + payload);
})

events.on('in-transit', payload => {
  console.log('EVENT event in transit ' + time + payload);
})


events.on('delivered', () => {

})

