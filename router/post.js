const express = require("express");

const router = express.Router();

const Pokemon = require("../model/model");
const Series = require("../model/series");
const Persion = require("../model/personage");
const Movies = require("../model/movies");

router.get("/", async (req, res) => {
  let pokemon = await Pokemon.find();
  let series = await Series.find();
  let persion = await Persion.find();
  let movies = await Movies.find();
  res.render("index", { pokemon, series, persion, movies });
});

router.post("/pokemon", async (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  }); // xử lý data
  try {
    const SavePost = await pokemon.save();
    console.log(SavePost);
    res.redirect("/");
  } catch (error) {
    res.json({ message: error });
  }
});
// post series
router.post("/series", async (req, res) => {
  const series = new Series({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  }); // xử lý data
  try {
    const SavePost = series.save();
    console.log(SavePost);
    res.json({ message: "successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});
// post persion
router.post("/persion", async (req, res) => {
  const persion = new Persion({
    name: req.body.name,
    sname: req.body.sname,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  }); // xử lý data
  try {
    const SavePost = persion.save();
    console.log(SavePost);
    res.json({ message: "successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});
// post movies
router.post("/movies", async (req, res) => {
  const movies = new Movies({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  }); // xử lý data
  try {
    const SavePost = movies.save();
    console.log(SavePost);
    res.json({ message: "successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});
router.get("/pokemon/:id", async (req, res) => {
  try {
    const get = await Pokemon.findById(req.params.id);
    res.json(get);
  } catch (error) {
    res.json({ message: error });
  }
});
// end delete
router.delete("/pokemon/:id", async (req, res) => {
  try {
    const RemoveId = await Pokemon.remove({ _id: req.params.id });
    res.json(RemoveId);
  } catch (error) {
    res.json({ message: error });
  }
});
//update
router.patch("/pokemon/:id", async (req, res) => {
  try {
    const update = await Pokemon.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(update);
  } catch (error) {
    res.json({ message: error });
  }
});
//


module.exports = router;
