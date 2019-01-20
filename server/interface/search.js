import Router from "koa-router";
import axios from "./utils/axios";
import { Z_DEFAULT_STRATEGY } from "zlib";
import { stat } from "fs";

const router = new Router({
  prefix: "/search"
});
const sign = "8729fc7860fc38066b45d999606d9e8e";

router.get("/top", async ctx => {
  let {
    status,
    data: { top }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  });
  ctx.body = {
    top: status === 200 ? top : []
  };
});

router.get("/hotPlace", async ctx => {
  let city = ctx.store ? ctx.store.state.geo.position.city : ctx.query.city;
  let {
    status,
    data: { result }
  } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      city: city,
      sign
    }
  });
  ctx.body = {
    result: status === 200 ? result : []
  };
});

router.get("/resultsByKeywords", async ctx => {
  let { city, keyword } = ctx.query;
  let {
    status,
    data: { count, pois }
  } = await axios.get(`http://cp-tools.cn/search/resultsByKeywords`, {
    params: {
      city,
      keyword,
      sign
    }
  });
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  };
});

export default router;
