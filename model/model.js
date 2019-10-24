
// định nghĩa model
const mongo = require("mongoose");

const Pokemon = mongo.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  imgUrl:{
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongo.model("pokemon", Pokemon);

