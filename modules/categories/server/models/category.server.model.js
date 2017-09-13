'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Category name',
    trim: true
  },
  parent: {
    type: String
  },
  image: {
    type: [String]
  },
  description: {
    type: String
  },
  shop_id: {
    type: Schema.ObjectId,
    ref: 'Shop'
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

mongoose.model('Category', CategorySchema);
