import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    resume: null,
    testimonials: null,
  },
  getters: {
    projects(state){
      return state.projects;
    },
    resume(state){
      return state.resume;
    },
    testimonials(state){
      return state.testimonials;
    }
  },
  mutations: {
    setProjects(state, projects){
      state.projects = projects;
    },
    setResume(state, resume){
      state.resume = resume;
    },
    setTestimonials(state, testimonials){
      state.testimonials = testimonials;
    }
  },
  actions: {
    // fetch all projects data
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

    // fetch all resume data
    async fetchResume(context){
      try{
        const resume = JSON.parse(localStorage.getItem('resume'));
        context.commit('setResume', resume);
        console.log('Resume: ', resume);
      }
      catch (err) {
        console.error(err);
      }
    },

    // fetch all testimonials data
    async fetchTestimonials(context){
      try{
        const testimonials = JSON.parse(localStorage.getItem('testimonials'));
        context.commit('setTestimonials', testimonials);
        console.log(testimonials);
      }
      catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
})
