var express = require("express");
var router = express.Router();
const Token = require("../utils/token");
const jwt = require("jsonwebtoken");
const { dbConnect } = require("../utils/db");

/* GET users listing. */
router.get("/menus", function (req, res, next) {
  const sql = "select * from role";
  const sqlArr = [];
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
        redirect: "/system/user/index",
        meta: {
          icon: "Tools",
          title: "系统管理",
        },
        children: [
          {
            path: "/system/user/index",
            name: "User",
            component: "/system/user/index",
            meta: {
              icon: "Avatar",
              title: "用户管理",
            },
          },
          {
            path: "/system/role/index",
            name: "Role",
            component: "/system/role/index",
            meta: {
              icon: "User",
              title: "角色管理",
            },
          },
          {
            path: "/system/menu/index",
            name: "Menu",
            component: "/system/menu/index",
            meta: {
              icon: "Menu",
              title: "菜单管理",
            },
          },
        ],
      },
      {
        path: "/assembly",
        name: "assembly",
        redirect: "/assembly/iconfont",
        meta: {
          icon: "TakeawayBox",
          title: "常用组件",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true,
        },
        children: [
          {
            path: "/assembly/iconfont",
            name: "IconFont",
            component: "/assembly/iconfont",
            meta: {
              icon: "Crop",
              title: "Icon Font",
            },
          },
          {
            path: "/assembly/draggable",
            name: "Draggable",
            component: "/assembly/draggable",
            meta: {
              icon: "Rank",
              title: "拖动组件",
            },
          },
          {
            path: "/assembly/WangEditor",
            name: "WangEditor",
            component: "/assembly/wangEditor",
            meta: {
              icon: "Edit",
              title: "富文本编辑器",
            },
          },
        ],
      },
      {
        path: "/echarts",
        name: "Echarts",
        redirect: "/echarts/index",
        meta: {
          icon: "TrendCharts",
          title: "Echarts",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true,
        },
        children: [
          {
            path: "/echarts/index",
            name: "LineChart",
            component: "/echarts/echarts",
            meta: {
              icon: "DataLine",
              title: "echart 图表",
            },
          },
        ],
      },
      {
        path: "/directive",
        name: "Directive",
        redirect: "/directive/copy",
        meta: {
          icon: "Cpu",
          title: "自定义指令",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true,
        },
        children: [
          {
            path: "/directive/copy",
            name: "Copy",
            component: "/directive/copy",
            meta: {
              icon: "CopyDocument",
              title: "复制",
            },
          },
          {
            path: "/directive/drag",
            name: "Drag",
            component: "/directive/drag",
            meta: {
              icon: "StarFilled",
              title: "拖拽",
            },
          },
          {
            path: "/directive/throttle",
            name: "Throttle",
            component: "/directive/throttle",
            meta: {
              icon: "IceCream",
              title: "节流",
            },
          },
        ],
      },
    ],
    message: "请求成功!",
  });

  // const callback = (err, data) => {
  //   if (err) throw err;
  // };

  // dbConnect(sql, sqlArr, callback);
});

module.exports = router;
