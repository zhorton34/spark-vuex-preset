import state from './state'
import actions from './actions' 
import getters from './getters'
import mutations from './mutations'

export default {
  	namespaced: true,
    actions,
    state,
    mutations,
    getters
}	