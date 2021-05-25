import Vue from 'vue';
import Vuex from 'vuex';
import MD5 from '../modules/md5.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: '',
    browser: navigator.userAgent,
    auth: {},
    answer: [],
  },
  getters: {
    crypto(state) {
      return MD5(state.browser)
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload;
    },
    setAuth(state, payload) {
      state.auth = payload;
    },
    setAnswer(state, payload) {
      state.answer = payload;
    },
  },
  actions: {
    actionLogin({ commit }, payload) {
      commit('setLogin', payload)
    },
    actionAuth({ commit }, payload) {
      commit('setAuth', payload);
    },
    actionAnswer({ commit }, payload) {
      commit('setAnswer', payload);
    },
  },
  modules: {
  }
})
