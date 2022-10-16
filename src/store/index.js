import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardObj: {}
  },
  getters: {
    get_card: (state) => {
      return state.cardObj;
    },
  },
  mutations: {
    set_card(state, cardObj) {
      state.cardObj = cardObj;
    },
  },
  actions: {},
  modules: {}
})