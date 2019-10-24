const express = require("express");
const User = require("../model/user");

const router = express.Router();
// const auth = require("../controller/controller");

router.post("/signup", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201)
    console.log(token)
    res.redirect("login");
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/login",(req,res)=>{
  res.render("login")
})
router.get("/signup",(req,res)=>{
  res.render("signup")
})

router.post("/login", async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {

      // res.redirect("/login");
      res.status(401).send({error: 'Login failed! Check authentication credentials'})
     
    }
    const token = await user.generateAuthToken();
    res.redirect("/");
    console.log(token)
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/users/:id", async (req, res) => {
  // View logged in user profile
  res.send(req.params.id);
  console.log(req.params.id);
});

router.post("/users/me/logout", async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logoutall", async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
