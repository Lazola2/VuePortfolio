import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    resume: null,
  },
  getters: {
    projects(state){
      return state.projects;
    },
    resume(state){
      return state.resume;
    },
  },
  mutations: {
    setProjects(state, projects){
      state.projects = projects;
    },
    setResume(state, resume){
      state.resume = resume;
    },
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
    },

    async fetchResume(context){
      try{
        const resume = JSON.parse(localStorage.getItem('resume'));
        context.commit('setResume', resume);
        console.log('Resume: ', resume);
      }
      catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
})
