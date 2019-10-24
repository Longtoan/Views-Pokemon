const mongo = require("mongoose");
const Person = mongo.Schema(
  {
    name: {
      type: String,
      require: true
    },
    sname: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    imgUrl: {
      type: String,
      require: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "pesion" }
);

module.exports = mongo.model("pesion", Person);
