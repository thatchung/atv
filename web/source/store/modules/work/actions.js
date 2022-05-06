import ApiService from '@/service/api.service'
export default {
    getListWork: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/works`,
            data: data.params ? data.params : {}
        })
        commit('set_list_work', {
            list_work: res
        })
    },

    getCountWork: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/works/count`,
            data: data.params ? data.params : {}
        })
        return res
    },

    getWorkId: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/works/${data.id}`,
            data: data.params ? data.params : {}
        })
        commit('set_work', {
            work: res
        })
    },

    getWorkBySlug: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: rootState.common.api_host + `/works?url=${data.url}`
        })
        if (res && res.length > 0) {
            commit('set_work', {
                work: res[0]
            })
        }
    }

}