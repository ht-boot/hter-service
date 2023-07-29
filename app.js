var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { expressjwt } = require("express-jwt");

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var routes = require("./routes/route");
const secretKey = "token";

var app = express();

app.use(
  expressjwt({
    secret: secretKey,
    algorithms: ["HS256"], // 使用何种加密算法解析
  }).unless({ path: ["/login"] }) // 登录页无需校验
);

app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  if (err.name === "UnauthorizedError") {
    return res.send({
      status: 401,
      data: null,
      message: "无效的token。",
    });
  }
  res.send({
    status: 500,
    data: null,
    message: "未知的错误。",
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(authRouter);
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
