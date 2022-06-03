import axios from 'axios'
import apiClient from '@/service/apiClient'
class ApiService {
    async request(...options) {
        options = options[0]
        let response, error
        const header = options.header || {}
        const url = options.url
        try {
            const data = {
                method: options.method.trim().toLowerCase(),
                url: url,
                headers: header
            }
            if (data.method === 'get' || data.method === 'delete')
                data.params = options.data || null
            else
                data.data = options.data || null
            if (options.blob)
                data.responseType = 'blob'
            if (options.timeout)
                data.timeout = options.timeout
            if(apiClient) {
                if (data.params) {
                    response = await apiClient.get(url,{
                        params:  data.params
                    })
                } else {
                    response = await apiClient.get(url)
                }
            } else {
                response = await axios(data)
            }
            response = response.data
        } catch (e) {
            error = e
        }
        if (error) {
            if (error.response) {
                response = error.response.data
            }

            if (!response) {
                response = {
                    meta: { success: false },
                    error: { message: error.message }
                }
            }
        }

        // if (typeof response !== 'object')
        //     response = {
        //         meta: { success: false },
        //         error: { message: error.response.statusText }
        //     }

        return response
    }
}

export default new ApiService
