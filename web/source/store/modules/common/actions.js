import ApiService from '@/service/api.service'
export default {

    getContact: async ({ commit, rootState }) => {
        let res = await ApiService.request({
            method: 'get',
            // url: rootState.common.api_host + `/contact`
            url: `api/contact`
        })
        commit('set_contact', {
            contact: res
        })
    },

    getListCategory: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            // url: rootState.common.api_host + `/categories`,
            url: `api/categories`,
            data: data.params ? data.params : {}
        })
        commit('set_list_category', {
            list_category: res
        })
    },

    getListYear: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            // url: rootState.common.api_host + `/years?_sort=name:desc`,
            url: `api/years?_sort=name:desc`,
            data: data.params ? data.params : {}
        })
        commit('set_list_year', {
            list_year: res
        })
    },

    getListLocation: async ({ commit, rootState }, data = {}) => {
        let res = await ApiService.request({
            method: 'get',
            // url: rootState.common.api_host + `/locations?_sort=id:asc`,
            url: `api/locations?_sort=id:asc`,
            data: data.params ? data.params : {}
        })
        commit('set_list_location', {
            list_location: res
        })
    },

    getbyUrlOrigin: async ({ commit, state }, data) => {
        let res = await ApiService.request({
            method: 'get',
            service: 'origin',
            url: data.url,
            data: data.params ? data.params : {}
        })
        return res
    },

    getbyUrl: async ({ commit, state }, data) =>  {
        let res = await ApiService.request({
            method: 'get',
            service: data.service ? data.service : 'review',
            header: data.header ? data.header : {},
            url: data.url,
            data: data.params ? data.params : {}
        })
        return res
    },

    postbyUrl: async ({ commit, state }, data) => {
        let res = await ApiService.request({
            method: 'post',
            timeout: 300000,
            url: data.url,
            service: data.service ? data.service : 'review',
            data: data.params ? data.params : {},
            imageFiles: data.imageFiles ? data.imageFiles : null,
            imageFile: data.imageFile ? data.imageFile : null,
            videoFile: data.videoFile ? data.videoFile : null,
            coverFile: data.coverFile ? data.coverFile : null
        })
        return res
    },

    putbyUrl: async ({ commit, state }, data) => {
        let res = await ApiService.request({
            method: 'put',
            url: data.url,
            data: data.params
        })
        return res
    },

    deletebyUrl: async ({ commit, state }, data) => {
        let res = await ApiService.request({
            method: 'delete',
            url: data.url
        })
        return res
    }

}