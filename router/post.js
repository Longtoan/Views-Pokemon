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
router.get("/data", async (req, res) => {
  let pokemons = await Pokemon.find();
  let series = await Series.find();
  let persion = await Persion.find();
  let movies = await Movies.find();
  res.json({pokemons})
});

router.post("/pokemon", async (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    weaknesses: req.body.weaknesses,
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
    let pokemondetail = await Pokemon.findById(req.params.id);
    console.log(pokemondetail)
    res.render("pokemondetail", {pokemondetail});
  } catch (error) {
    res.json({ message: error });
  }
});


//


module.exports = router;
