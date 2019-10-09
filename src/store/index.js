import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import programs from './modules/programs';
import medias from './modules/medias';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    programs,
    medias,
  },
});
