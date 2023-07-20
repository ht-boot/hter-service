const mysql = require("mysql");

// 数据库配置
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "admin",
  database: "hter",
};

module.exports = {
  /**
   *
   * @param sql  sql 语句
   * @param sqlArr sql 数组查询条件
   * @param callback 回调函数
   */
  // mysql数据库连接
  dbConnect: function (sql, sqlArr, callback) {
    var pool = mysql.createPool(dbConfig);
    pool.getConnection((err, db) => {
      if (err) {
        console.log("数据库连接失败！");
        throw err;
      }
      // 事件回调
      db.query(sql, sqlArr, callback);
      // 释放连接
      db.release();
    });
  },
};
