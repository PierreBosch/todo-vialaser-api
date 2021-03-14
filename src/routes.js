
const express = require("express");
const routes = express.Router();
const controllers = require("./app/controllers");

/**
 * From here all routes need a token
 */

routes.get("/", (req, res) => {
  res.json({ result: "Its on!" });
});

module.exports = routes;