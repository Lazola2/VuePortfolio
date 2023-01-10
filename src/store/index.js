import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
  },
  getters: {
    projects(state){
      return state.projects;
    },
  },
  mutations: {
    setProjects(state, projects){
      state.projects = projects;
    }
  },
  actions: {
    async fetchAllProjects(context) {
      try {
        const projects = JSON.parse(localStorage.getItem('projects'));
        context.commit('setProjects', projects);
        console.log(projects)
      } 
      catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
})
