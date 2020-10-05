require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { email } = require("../utils");

router.post("/", ({ body }, res) => {
  console.log(body);
  db.Inquire.create(body)
    .then((data) => {
      res.json(data);
      email(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
