import ApiService from '@/service/api.service'
export default {

    getListInnovation: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `innovations`,
            data: data.params ? data.params : {}
        })
        commit('set_list_innovation', {
            list_innovation: res
        })
    },

    getListInnovationId: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `innovations/${data.id}`,
            data: data.params ? data.params : {}
        })
        commit('set_innovation', {
            innovation: res
        })
    }

}