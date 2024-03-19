const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    default: "default.png",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = {
  Customer,
};
