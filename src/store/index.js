import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import programs from './modules/programs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    programs,
  },
});
