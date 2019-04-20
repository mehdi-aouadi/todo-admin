import _ from 'lodash';
import router from '@/router';
import * as types from '../mutation-types';

const state = {
  user: null,
};

const mutations = {
  [types.SET_LOGIN](user) {
    state.user = user;
  },
  [types.LOGOUT]() {
    state.user = null;
    router.push('/login');
    location.reload();
  },
};

const actions = {
  setLogin({ commit }, user) {
    commit(types.SET_LOGIN, user);
  },
  logout({ commit }) {
    commit(types.LOGOUT);
  },
};

const getters = {
  login: currentState => currentState.user,
  logged: currentState => !_.isNull(currentState.user),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
