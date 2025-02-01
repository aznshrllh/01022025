const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "App is working!" });
});

const productRouter = require("./product");

module.exports = router;
