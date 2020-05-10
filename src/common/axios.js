import axios from 'axios'
import { app } from '../main'
import store from '../store/index'
import { toQueryString } from './utils'

let instance = axios.create({
    timeout: 20000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

// 请求时的拦截器
instance.interceptors.request.use(
    (config) => {
        store.commit('loading')

        let AUTH_TOKEN = (function() {
            return localStorage.getItem('token')
        })()

        if (AUTH_TOKEN) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.AUTH_TOKEN = AUTH_TOKEN
        }

        return config
    },
    (error) => {
        store.commit('unloading')
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (res) => {
        store.commit('unloading')
        return res
    },
    (error) => {
        store.commit('unloading')
        return Promise.resolve(error.res)
    }
)

export default {
    /**
     * post请求
     * @param {*} url 请求地址
     * @param {*} data  参数
     * @param {*} headerType content-type
     */
    post(
        url,
        data,
        headerType = { 'Content-Type': 'application/json;charset=utf-8' }
    ) {
        return instance
            .request({
                method: 'post',
                url,
                data,
                headers: headerType
            })
            .then((res) => res)
    },
    /**
     * get请求
     * @param {*} url 请求地址
     * @param {*} params  参数
     */
    get(url, params) {
        return instance
            .request({
                method: 'get',
                url,
                params // get 请求时带的参数
            })
            .then((res) => {
                return res
            })
            .then((res) => {
                return res
            })
    }
}
