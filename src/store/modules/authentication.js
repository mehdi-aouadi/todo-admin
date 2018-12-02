import SET_LOGIN from '../mutation-types';

const state = {
  login: null,
};

const mutations = {
  [SET_LOGIN](currentState, login) {
    // eslint-disable-next-line no-console
    console.log('OURRRAAA : ', login);
    state.login = login;
  },
};

const actions = {
  setLogin({ commit }, login) {
    commit(SET_LOGIN, login);
  },
};

const getters = {
  login: currentState => currentState.login,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
