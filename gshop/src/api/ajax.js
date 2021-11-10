/*
    ajax 请求函数模块
*/
// 向外默认暴露 ajax 函数
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function(resolve, reject) {

        let promise

        if (type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 get 请求
            promise = axios.get(url)

        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }

        /*
            如果请求成功, axios 返回的是一个 promise 对象, 那么就将会调用以下函数, 这个 promise 对象的 resolve 函数
        将接收到的响应 response 的 data 属性作为参数, 交给 promise 外面的 Promise 实例对象的 resolve 函数调用
        */
        promise.then(response => {
                console.log(response)
                    // console.log(response.data)
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}