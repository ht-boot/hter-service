var express = require("express");
var router = express.Router();
const { loginFun } = require("../utils/querydb");

/* login api */
router.post("/login", function (req, res) {
  loginFun(req, res);
});

module.exports = router;
