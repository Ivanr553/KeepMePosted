const express = require("express");
const mongoose = require("mongoose");
const db = require("../config/database");
let Schema = mongoose.Schema;

let RequestSchema = new Schema(
  {
    class: {
      type: String,
      required: true
    },
    term: {
      type: String,
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

module.exports.saveRequest = function(input) {
  input.save(input, (err) => {
    if (err) throw err;
    console.log('Request saved')
  })
};
