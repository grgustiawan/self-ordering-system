import { createStore } from 'vuex'

export default createStore({
  state: {
      host: '',
      branch: '',
      table: '',
  },
  mutations: {
    saveHost(state, newHost){
      state.host = newHost;
    },
    saveBranch(state, newBranch){
      state.branch = newBranch;
    },
    saveTable(state, newTable){
      state.table = newTable;
    }
  },
  getters: {
    servers(state){
      return state.host;
    }
  },
  actions: {
  },
  modules: {
  }
})
