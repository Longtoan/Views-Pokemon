const express = require("express");
const mongooose = require('mongoose');
const app = express();


//import Router
const postRouter = require("./router/post");

const bodyParse = require("body-parser"); //format data

require("dotenv/config");

app.use(bodyParse.json());
// connect to database
mongooose.connect(process.env.MongoConnect, { useNewUrlParser: true },(err) =>{
  if(err) console.log(err)
  console.log('connected!');
 })

app.use("/todos", postRouter);

app.get("/", (req, res) => {
  res.send("Home");
});

// run port
app.listen(3000, () => {
  console.log("web server is listening on port 3000");
});
