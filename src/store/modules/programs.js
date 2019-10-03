/* eslint-disable no-shadow */
import _ from 'lodash';
import resource from '@/resource';
import * as endPoints from '@/resource/endpoints';
import * as types from '../mutation-types';

const state = {
  programList: [],
  program: {},
};

const mutations = {
  [types.SET_PROGRAM_LIST](state, programList) {
    state.programList = programList;
  },
  [types.SET_PROGRAM](state, program) {
    state.program = program;
  },
};

const actions = {
  setProgramList({ commit }, { range }) {
    const programResource = _.cloneDeep(resource);
    programResource.set(endPoints.PROGRAM_END_POINT);
    programResource.get({ range }).then((response) => {
      commit(types.SET_PROGRAM_LIST, response.body);
    });
  },
  setProgramById({ commit }, programId) {
    const programResource = _.cloneDeep(resource);
    programResource.set(`${endPoints.PROGRAM_END_POINT}{/id}`);
    programResource.get({ id: programId }).then((response) => {
      commit(types.SET_PROGRAM, response.body);
    });
  },
};

const getters = {
  programList: state => state.programList,
  program: state => state.program,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
