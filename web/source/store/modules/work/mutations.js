export default {
    set_list_work(state, payload) {
        state.list_work = payload.list_work;
    },
    set_list_work_featured(state, payload) {
        state.list_work_featured = payload.list_work_featured;
    },
    set_work(state, payload) {
        state.work = payload.work;
    }
};
