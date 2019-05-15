import Vue from 'vue'
import Vuex from 'vuex'
import routes from './routes'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes:routes,
    addRoutes: [],
  },
  mutations: {
    setAddRoutes (state, routes) {
      state.addRoutes = routes
    },
  },
  actions: {

  }
})
