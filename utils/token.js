const jwt = require("jsonwebtoken");
const secretKey = "token";

const Token = {
  encrypt: function (data, time) {
    //data加密数据，time过期时间
    return jwt.sign(data, secretKey, { expiresIn: time });
  },
  // 解密 express-jwt 替换
  decrypt: function (token) {
    return jwt.verify(token, secretKey, (err, data) => {
      if (err) {
        return err;
      }
      return data;
    });
  },
};
module.exports = Token;
