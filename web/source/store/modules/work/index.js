import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const state = () => ({
    work: {},
    list_work : [],
    list_work_featured : []
});

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
