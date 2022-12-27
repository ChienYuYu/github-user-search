import { createStore } from 'vuex';

export default createStore({
  state: {
    userData: [],
  },
  getters: {
  },
  mutations: {
    writeUserData(state, data) {
      state.userData = data;
    },
  },
  actions: {
  },
  modules: {
  },
});
