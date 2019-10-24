
// định nghĩa model
const mongo = require("mongoose");

const Movies = mongo.Schema({
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
  },
},{ collection: "movies" });

module.exports = mongo.model("movies", Movies);

