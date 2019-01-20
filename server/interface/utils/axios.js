import axios from "axios";
// import { Loading, Message } from "element-ui";
const instance = axios.create({
  baseUrl: `http://${process.env.HOST || "localhost"}:${process.env.PORT ||
    3000}`,
  timeout: 3000,
  headers: {}
});

// request拦截器，实现loading加载
// instance.interceptors.request.use(
//   config => {
//     loadingInstance = Loading.service({});
//     return config;
//   },
//   error => {
//     loadingInstance.close();
//     Message({
//       message: error.message,
//       type: "error",
//       duration: 5 * 1000
//     });
// this.$message({

// });
//     return Promise.reject(error);
//   }
// );

// response拦截器，实现loading关闭
// instance.interceptors.response.use(
//   data => {
//     loadingInstance.close();
//     return data;
//   },
//   error => {
//     Message({
//       message: error.message,
//       type: "error",
//       duration: 5 * 1000
//     });
//     return Promise.reject(error);
//   }
// );
export default instance;
