import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
    province: {},
    otp_method: [],
    list_ads : [],
    api_host : 'http://191.191.3.119:1337'
})

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
