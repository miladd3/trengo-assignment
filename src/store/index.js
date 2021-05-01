import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { id: 1, icon: 'phone', label: 'Team@trengo.com' },
      { id: 2, icon: 'phone', label: 'Call center' },
      { id: 3, icon: ['fab', 'whatsapp'], label: 'Whatsapp business' },
      {
        id: 4,
        icon: 'envelope',
        label: '(test) development California',
      },
    ],
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {},
  modules: {},
});
