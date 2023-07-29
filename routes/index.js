var express = require("express");
var router = express.Router();
const { loginFun } = require("../utils/querydb");
const { decrypt } = require("../utils/tools");
const Token = require("../utils/token");

/* login api */
router.post("/login", function (req, res) {
  const { username, password } = req.body;

  console.log(username, password);

  if (username === "admin" && decrypt(password) === "123456") {
    res.send({
      code: 200,
      data: {
        userInfo: {
          create_time: "2023-07-19T05:59:36.000Z",
          dept_id: 0,
          email: "1165006789@qq.com",
          id: 1,
          imageUrl:
            "https://tupian.qqw21.com/article/UploadPic/2021-1/20211722215735941.jpg",
          nickname: "超级管理员",
          phone: "17345242700",
          role_id: 1,
          status: 0,
          update_time: "2023-07-27T13:06:01.000Z",
          username: "admin",
        },
        token: Token.encrypt({ id: "1001" }, 60 * 60 * 24 * 7),
      },
      message: "登录成功!",
    });
  } else {
    res.send({
      code: 0,
      data: null,
      message: "账号或密码错误!",
    });
  }
  // loginFun(req, res);
});

module.exports = router;
