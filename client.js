'use strict';

const events = require('./events');
const driver = require('./driver.js');

//vendor or sender

let payload = {
  store: 'testStore',
  orderID: 'testOrderID',
  customer: 'testCustomerName',
  address: 'testAddress'
}

events.emit('pickup', payload);

events.on('delivered', (payload) => {
  console.log(' Thank you, ' + payload.customer);
})

