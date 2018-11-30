import Router from "koa-router";
import Redis from "koa-redis";
import axios from "./utils/axios";
import Passport from "./utils/passport";
import User from "../dbs/models/user";
import Email from "../dbs/config";
import nodeMailer from "nodemailer";

let router = new Router({
  prefix: "/user/"
});

let Store = new Redis().client;

router.post("/signup", async ctx => {
  let { username, password, email, code } = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, "code");
    const saveExpire = await Store.hget(`nodemail:${username}`, "expire");
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: "验证码已过期，请重新尝试"
        };
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "请填写正确的验证码"
      };
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "请填写验证码"
    };
  }
  let user = await User.find({ username });
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: "已被注册"
    };
    return;
  }
  let new_user = await User.create({ username, password, email });
  if (new_user) {
    let res = await axios.post("/users/signin", { username, password, email });
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: "注册成功",
        user: res.data.user
      };
    } else {
      ctx.body = {
        code: -1,
        msg: "error"
      };
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    };
  }
});
