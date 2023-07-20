const CryptoJS = require("crypto-js");
// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse("1234123412341234");
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse("1234123412341234");

/**
 * 密码解密方法
 * @param txt
 * @returns {string}
 */
const decrypt = (txt) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(txt);
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};

module.exports = {
  decrypt,
};
