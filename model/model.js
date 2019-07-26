
// định nghĩa model
const mongo = require("mongoose");

const PostSchema = mongo.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongo.model("post", PostSchema);
