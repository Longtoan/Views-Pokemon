const mongo = require("mongoose");
const Series = mongo.Schema(
  {
    name: {
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
  { collection: "series" }
);

module.exports = mongo.model("series", Series);
