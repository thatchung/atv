import ApiService from '@/service/api.service'
export default {

    getbyUrlOrigin: async function ({
        commit
    }, data) {
        let res = await ApiService.request({
            lixi_review: true,
            method: 'get',
            service: 'origin',
            url: data.url,
            data: data.params ? data.params : {}
        });
        return res;
    },

    getbyUrl: async function ({
        commit
    }, data) {
        let res = await ApiService.request({
            lixi_review: true,
            method: 'get',
            service: data.service ? data.service : 'review',
            header: data.header ? data.header : {},
            url: data.url,
            data: data.params ? data.params : {}
        });
        return res;
    },

    postbyUrl: async function ({
        commit
    }, data) {
        let res = await ApiService.request({
            lixi_review: true,
            method: 'post',
            timeout: 300000,
            url: data.url,
            service: data.service ? data.service : 'review',
            data: data.params ? data.params : {},
            imageFiles: data.imageFiles ? data.imageFiles : null,
            imageFile: data.imageFile ? data.imageFile : null,
            videoFile: data.videoFile ? data.videoFile : null,
            coverFile: data.coverFile ? data.coverFile : null
        });
        return res;
    },

    putbyUrl: async function ({
        commit
    }, data) {
        let res = await ApiService.request({
            lixi_review: true,
            method: 'put',
            url: data.url,
            data: data.params
        });
        return res;
    },

    deletebyUrl: async function ({
        commit
    }, data) {
        let res = await ApiService.request({
            lixi_review: true,
            method: 'delete',
            url: data.url
        });
        return res;
    }

}