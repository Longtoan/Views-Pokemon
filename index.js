const express = require("express");
const mongooose = require("mongoose");
const app = express();
const cors = require("cors"); 
const morgan = require("morgan");
//import Router
const Pokemon = require("./router/post");
const UserRouter = require("./router/puser");
const bodyParse = require("body-parser"); //format data
const dotenv = require("dotenv");
dotenv.config();
app.use(express.static(__dirname + "/public"));
app.use(cors("*"));
app.use(morgan("dev"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.json());
// connect to database
mongooose.connect(
  process.env.MongoConnect,
  { useNewUrlParser: true, useCreateIndex: true },
  err => {
    if (err) console.log(err);
    else console.log("connected!");
  }
);

app.use("/", Pokemon, UserRouter);
// setup pug
app.set("views", "./public/views"); // Thư mục views nằm cùng cấp với file app.js
app.set("view engine", "pug"); // Sử dụng pug làm view engine
// run port
app.listen(3000, () => {
  console.log("web server is listening on port 3000");
});
