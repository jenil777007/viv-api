var express = require("express");
const cors = require("cors");
var router = express.Router();
const fetch = require("node-fetch");
const constants = require("../constants");
const utils = require("../utils");

router.get("/weather", cors(), async function (req, res, next) {
  try {
    const response = await fetch(constants.API_URL);
    let data = await response.json();

    data = utils.cleanData(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
