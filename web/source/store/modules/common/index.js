import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
    province: {},
    otp_method: [],
    list_ads : [],
    api_host : 'http://103.39.93.99:1333'
})

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
