import Vue from "vue";
import Vuex, { Store } from "vuex";
import geo from "./modules/geo";
import home from "./modules/home";

Vue.use(Vuex);

const store = () =>
  new Store({
    modules: {
      geo,
      home
    },
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        const {
          status,
          data: { province, city }
        } = await app.$axios(`http://localhost:3000/geo/getPosition`);
        commit(
          "geo/setPosition",
          status === 200 ? { province, city } : { province: "", city: "" }
        );
        const {
          status: status2,
          data: { menu }
        } = await app.$axios(`http://localhost:3000/geo/menu`);
        commit("home/setMenu", status2 === 200 ? menu : []);
      }
    }
  });
export default store;
