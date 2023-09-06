const express = require("express");
const createError = require("http-errors");
const router = express.Router();

const Dialogue = require("../Models/Dialogue.model");
// here '/' means products/   [products will be given when calling the Routes in app.js] relative url

router.get("/", async (req, res, next) => {
  try {
    // here we are using projection to get the desired fields or to omit the fields
    const result = await Dialogue.find({}, { __v: 0 });
    // const result = await Product.find({}, {name: 1, _id: 0, price: 1});
    if(result.length==0)
    {
      throw createError(404, "There is no Dialogue in the database.");
    }
    res.send(result);
  } catch (error) {
    console.log(error.message)
    next(error)
  }
});

// asynchronous req for the creation of the product
router.post("/", async (req, res, next) => {
  try {
    const dialogue = new Dialogue(req.body);
    const result = await dialogue.save();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await Dialogue.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.patch("/:id", async(req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = {new: true}; //for getting the new result
    const result = await Dialogue.findByIdAndUpdate(id, updates, options);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Dialogue.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
