export default {
  dbs: "mongodb://127.0.0.1:27017/student",
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
      return "1532168980@qq.com";
    },
    get pass() {
      return "rtegcrofmbsmjcff";
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
