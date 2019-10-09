/* eslint-disable no-shadow */
import _ from 'lodash';
import resource from '@/resource';
import * as endPoints from '@/resource/endpoints';
import * as types from '../mutation-types';

const state = {
  mediaList: [],
  media: {},
};

const mutations = {
  [types.SET_MEDIA_LIST](state, mediaList) {
    state.mediaList = mediaList;
  },
  [types.SET_MEDIA](state, media) {
    state.media = media;
  },
};

const actions = {
  setMediaList({ commit }, { range }) {
    const mediaResource = _.cloneDeep(resource);
    mediaResource.set(endPoints.MEDIA_END_POINT);
    mediaResource.get({ range }).then((response) => {
      commit(types.SET_MEDIA_LIST, response.body);
    });
  },
  setMediaById({ commit }, mediaId) {
    const mediaResource = _.cloneDeep(resource);
    mediaResource.set(`${endPoints.MEDIA_END_POINT}{/id}`);
    mediaResource.get({ id: mediaId }).then((response) => {
      commit(types.SET_MEDIA, response.body);
    });
  },
};

const getters = {
  mediaList: state => state.mediaList,
  media: state => state.media,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
