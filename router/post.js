const express = require("express");

const router = express.Router();

const Post = require("../model/model");

router.get("/", (req, res) => {
  Post.find((err, todos) => {
    if (err) {
      res.json(err);
    }
    res.json(todos);
  });
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  }); // xử lý data
  try {
    const SavePost = post.save();
    res.json({ message: "successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});
// end post
router.get("/:id", async (req, res) => {
  try {
    const get = await Post.findById(req.params.id);
    res.json(get);
  } catch (error) {
    res.json({ message: error });
  }
});
// end delete
router.delete("/:id", async (req, res) => {
  try {
    const RemoveId = await Post.remove({ _id: req.params.id });
    res.json(RemoveId);
  } catch (error) {
    res.json({ message: error });
  }
});
//update
router.patch("/:id", async (req, res) => {
  try {
    const update = await Post.updateOne(
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
