import ApiService from '@/service/api.service'
export default {

    getListWork: async function ({
        commit
    }, data = {}) {
        let res = await ApiService.request({
            method: 'get',
            url: `works`,
            data: data.params ? data.params : {}
        });
        commit('set_list_work', {
            list_work: res
        });
    },

    getListWorkId: async function ({
        commit
    }, data = {}) {
        let res = await ApiService.request({
            method: 'get',
            url: `works/${data.id}`,
            data: data.params ? data.params : {}
        });
        commit('set_work', {
            work: res
        });
    }

}