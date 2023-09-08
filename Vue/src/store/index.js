import Vue from "vue";
import Vuex from "vuex";


// Import Modules
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations,
    actions
})