import { createStore } from "vuex";
import axios from "axios";
//https://blog.logrocket.com/how-to-consume-apis-with-vuex-and-axios/
export default createStore({
  state: {
    items: []
  },
  getters: {
    AllItems: state => state.items
  },
  mutations: {
    SET_Item(state, Items) {
      state.items = Items;
    }
  },
  actions: {
    getItems({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        commit("SET_Item", response.data);
      });
    }
  },
  modules: {}
});
