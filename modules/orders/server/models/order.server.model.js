'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Order Schema
 */
var OrderSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Order name',
    trim: true
  },
  items: {
    type: [{
      product: {
        type: Schema.ObjectId,
        ref: 'Product'
      },
      qty: {
        type: Number
      }
    }]
  },
  shop: {
    type: Schema.ObjectId,
    ref: 'Shop'
  },
  cashier: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  amount: {
    type: Number
  },
  netamount: {
    type: Number
  },
  queue: {
    type: Number
  },
  customer: {
    type: String
  },

  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Order', OrderSchema);
