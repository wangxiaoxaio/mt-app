import Router from "koa-router";
import axios from "./utils/axios";

let router = new Router({
  prefix: "/geo"
});
const sign = "abcd";

router.get("/getPosition", async ctx => {
  let { status, data } = await axios.get(
    `http://cp-tools.cn/geo/getPosition?sign=${sign}`
  );
  if (status === 200) {
    console.log("success");
    console.log("data", data);
    ctx.body = {
      //   province,
      //   city
    };
  } else {
    ctx.body = {
      province: "error",
      city: "error"
    };
  }
});

export default router;
