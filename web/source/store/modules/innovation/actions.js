import ApiService from '@/service/api.service'
export default {

    getListInnovation: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/innovations`,
            data: data.params ? data.params : {}
        })
        commit('set_list_innovation', {
            list_innovation: res
        })
    },

    getListInnovationId: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/innovations/${data.id}`,
            data: data.params ? data.params : {}
        })
        commit('set_innovation', {
            innovation: res
        })
    },

    getInnovationBySlug: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/innovations?url=${data.url}`
        })
        if (res && res.length > 0) {
            commit('set_innovation', {
                innovation: res[0]
            })
        }
    }

}