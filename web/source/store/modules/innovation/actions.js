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
    },

    getInnovationBySlug: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `innovations?url=${data.url}`
        })
        if (res && res.length > 0) {
            commit('set_innovation', {
                innovation: res[0]
            })
        }
    }

}