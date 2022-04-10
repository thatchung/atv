import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const state = () => ({
    province: {},
    otp_method: [],
    list_ads : []
});

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
