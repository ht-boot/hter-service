var express = require("express");
var router = express.Router();
const Token = require("../utils/token");
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/menus", function (req, res, next) {
  // const token = req.auth;
  console.log(req.auth.id); // j获取token 信息

  res.send({
    code: 200,
    data: [
      {
        path: "/",
        name: "Home",
        component: "/home/index",
        meta: {
          icon: "HomeFilled",
          title: "首页",
        },
      },
      {
        path: "/system",
        name: "System",
        component: "/system/index",
        meta: {
          icon: "HomeFilled",
          title: "系统管理",
        },
      },
    ],
    message: "请求成功!",
  });
});

module.exports = router;
