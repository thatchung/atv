import ApiService from '@/service/api.service'
export default {
    getListWork: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `works`,
            data: data.params ? data.params : {}
        })
        commit('set_list_work', {
            list_work: res
        })
    },

    getCountWork: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `works/count`,
            data: data.params ? data.params : {}
        })
        return res
    },

    getWorkId: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `works/${data.id}`,
            data: data.params ? data.params : {}
        })
        commit('set_work', {
            work: res
        })
    },

    getWorkBySlug: async ({ commit }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            url: `works?url=${data.url}`
        })
        if (res && res.length > 0) {
            commit('set_work', {
                work: res[0]
            })
        }
    }

}