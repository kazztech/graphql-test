var express = require("express");
require("dotenv").config();
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  con.query("SELECT * FROM users", (err, rows, fields) => {
    res.send(JSON.stringify(rows));
  });
});

module.exports = router;
