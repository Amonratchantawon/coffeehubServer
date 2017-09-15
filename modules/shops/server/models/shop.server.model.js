'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Shop Schema
 */
var ShopSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Shop name',
    trim: true
  },
  address: {
    type: {
      address: {
        type: String
      },
      subdistrict: {
        type: String
      },
      district: {
        type: String
      },
      province: {
        type: String
      },
      postcode: {
        type: String
      }
    }
  },
  shopcode: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  location: {
    type: {
      lat: {
        type: String
      },
      lng: {
        type: String
      }
    }
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

mongoose.model('Shop', ShopSchema);
