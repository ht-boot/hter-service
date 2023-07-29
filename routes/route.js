var express = require("express");
var router = express.Router();
const { dbConnect } = require("../utils/db");

router.get("/user/list", function (req, res, next) {
  // const { username, phone, status, createTime, pageSize, currentPage } =
  //   req.query;
  // const sql = `select * from user limit ${
  //   (currentPage - 1) * pageSize
  // },${pageSize}`;
  // const sqlArr = [];
  // const callback = (err, data) => {
  //   if (err) throw err;
  //   data.map((item) => {
  //     item.password && delete item.password;
  //     return item;
  //   });
  //   res.send({
  //     code: 200,
  //     data,
  //     total: data.length,
  //     message: "数据请求成功！",
  //   });
  // };
  // dbConnect(sql, sqlArr, callback);

  const data = [
    {
      create_time: "2023-07-19T05:59:36.000Z",
      dept_id: 0,
      email: "1165006789@qq.com",
      id: 1,
      imageUrl:
        "https://tupian.qqw21.com/article/UploadPic/2021-1/20211722215735941.jpg",
      nickname: "超级管理员",
      phone: "17345242700",
      role_id: 1,
      status: 1,
      update_time: "2023-07-27T13:06:01.000Z",
      username: "admin",
    },
    {
      create_time: "2023-07-19T05:59:36.000Z",
      dept_id: 0,
      email: "44512546@qq.com",
      id: 1,
      imageUrl:
        "https://tupian.qqw21.com/article/UploadPic/2021-1/20211722215735941.jpg",
      nickname: "普通用户",
      phone: "17345242701",
      role_id: 2,
      status: 1,
      update_time: "2023-07-27T13:06:01.000Z",
      username: "user",
    },
  ];
  res.send({
    code: 200,
    data,
    total: data.length,
    message: "数据请求成功！",
  });
});

module.exports = router;
