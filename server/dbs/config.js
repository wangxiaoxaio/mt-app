export default {
  dbs: "mongoodb://127.0.0.1:27011",
  redis: {
    get host() {
      return "127.0.0.1";
    },
    get port() {
      return 6397;
    }
  },
  smtp: {
    get host() {
      return "smtp.qq.com";
    },
    get user() {
      return "**@qq.com";
    },
    get pass() {
      return "";
    },
    get code() {
      return () =>
        Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase();
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 1000;
      };
    }
  }
};
