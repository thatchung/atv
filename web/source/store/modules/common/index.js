import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
    province: {},
    contact: {},
    otp_method: [],
    list_ads : [],
    list_year: [],
    list_location: [],
    list_category: [],
    // api_host : 'http://191.191.1.121:1337',
    api_host : 'http://103.39.93.99:1333'
    // api_host : 'http://127.0.0.1:1337'
})

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
