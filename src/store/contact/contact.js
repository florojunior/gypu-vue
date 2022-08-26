import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  list: [],
  filterInput: ""
};

export const contact = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
