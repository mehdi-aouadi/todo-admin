/* eslint-disable no-shadow */
import _ from 'lodash';
import router from '@/router';
import * as types from '../mutation-types';

const state = {
  user: null,
};

const mutations = {
  [types.SET_LOGIN](state, user) {
    state.user = user;
  },
  [types.LOGOUT](state) {
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
  userName: state => state.user,
  logged: state => !_.isNull(state.user),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
