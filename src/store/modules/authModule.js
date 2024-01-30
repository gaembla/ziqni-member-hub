const state = {
  memberRefId: '',
  memberToken: '',
};
const getters = {
  getMemberToken(state) {
    return state.memberToken;
  },
  getMemberRefId(state) {
    return state.memberRefId;
  }
};

const mutations = {
  SET_MEMBER_TOKEN(state, payload) {
    state.memberToken = payload;
  },
  SET_MEMBER_REF_ID(state, payload) {
    state.memberRefId = payload;
  },
};

const actions = {
  setMemberTokenAction({commit}, payload) {
    commit('SET_MEMBER_TOKEN', payload);
  },
  setMemberRefIdAction({commit}, payload) {
    commit('SET_MEMBER_REF_ID', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
