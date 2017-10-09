const express = require("express");
const mongoose = require("mongoose");
const db = require("../config/database");
let Schema = mongoose.Schema;

let RequestSchema = new Schema(
  {
    subject: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    season: {
      type: String,
      required: true
    },
    crn: {
      type: Number,
      required: true
    },
    phone: {
      type: Number,
      required: true
    }
  },
  {
    collection: "kmpRequests"
  }
);

const Request = module.exports = mongoose.model("Request", RequestSchema);

module.exports.saveRequest = function(input, err) {
  input.save(input, (err) => {
    if (err) throw err;
    console.log('Request saved')
  })
};
