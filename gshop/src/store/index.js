/*vuex最核心的模块*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

// 声明使用
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})