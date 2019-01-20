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
        } = await app.$axios.get(`http://localhost:3000/geo/getPosition`);
        commit(
          "geo/setPosition",
          status === 200 ? { province, city } : { province: "", city: "" }
        );
        const {
          status: status2,
          data: { menu }
        } = await app.$axios.get(`http://localhost:3000/geo/menu`);
        commit("home/setMenu", status2 === 200 ? menu : []);
        const {
          status: status3,
          data: { result }
        } = await app.$axios.get(`http://localhost:3000/search/hotPlace`, {
          params: {
            city: app.store.state.geo.position.city.replace("市", "")
          }
        });
        commit("home/setHotPlace", status3 === 200 ? result : []);
      }
    }
  });
export default store;
