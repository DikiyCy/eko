import Vue from 'vue';
import Vuex from 'vuex';
import md5 from 'crypto-md5';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: '',
    browser: navigator.userAgent
  },
  getters: {
    crypto(state) {
      return md5(state.browser)
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload;
    },
  },
  actions: {
    actionLogin({ commit }, payload) {
      commit('setLogin', payload)
    }
  },
  modules: {
  }
})
