import ApiService from '@/service/api.service'
export default {

    getbyUrlOrigin: async ({ commit }, data) => {
        let res = await ApiService.request({
            method: 'get',
            service: 'origin',
            url: data.url,
            data: data.params ? data.params : {}
        })
        return res
    },

    getbyUrl: async ({ commit }, data) =>  {
        let res = await ApiService.request({
            method: 'get',
            service: data.service ? data.service : 'review',
            header: data.header ? data.header : {},
            url: data.url,
            data: data.params ? data.params : {}
        })
        return res
    },

    postbyUrl: async ({ commit }, data) => {
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

    putbyUrl: async ({ commit }, data) => {
        let res = await ApiService.request({
            method: 'put',
            url: data.url,
            data: data.params
        })
        return res
    },

    deletebyUrl: async ({ commit }, data) => {
        let res = await ApiService.request({
            method: 'delete',
            url: data.url
        })
        return res
    }

}