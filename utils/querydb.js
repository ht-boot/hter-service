const { dbConnect } = require("./db");
const Token = require("./token");
const { decrypt } = require("./tools");

// 登录
const loginFun = (req, res) => {
  let { username, password } = req.body;
  const sql = "select * from user where username = ?";
  const sqlArr = [username];
  const callback = (err, data) => {
    if (err) throw err;
    if (!data.length) {
      res.send({
        code: 0,
        data: null,
        message: "您输入的账号未注册！",
      });
      return;
    }

    //判断用户是否存在, 账号密码是否正确;
    const loginInfo = data.find((item) => {
      return item.username === username && item.password === decrypt(password);
    });

    if (loginInfo) {
      delete loginInfo.password; // 删除密码， 不返回密码
      res.send({
        code: 200,
        data: {
          userInfo: data[0],
          token: Token.encrypt({ id: loginInfo.id }, 60 * 60 * 24 * 7),
        },
        message: "登录成功!",
      });
    } else {
      res.send({
        code: 0,
        data: null,
        message: "账号密码错误!",
      });
    }
  };
  dbConnect(sql, sqlArr, callback);
};

module.exports = {
  loginFun,
};
