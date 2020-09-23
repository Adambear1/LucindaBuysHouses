require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { email } = require("../utils/Nodemailer");

router.post("/", ({ body }, res) => {
  db.Inquire.create(body)
    .then((data) => {
      res.json(data);
      email(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
