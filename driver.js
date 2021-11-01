'use strict';

// const Events = require('events');
// const events = new Events();
const events = require('./events');
const client = require('./client.js');

events.on('pickup', (payload) => {
  console.log('DRIVER: picked up ' + payload.orderID);
  events.emit('in-transit', payload);
  console.log('DRIVER: delievered ' + payload.orderID);
  events.emit('delivered', payload);
})
