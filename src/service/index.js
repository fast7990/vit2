import axios from 'axios';
import { ElLoading, ElMessage } from 'element-plus';
// 请求域名-本地请求
const http = 'https://api.apiopen.top';
// 创建axios实例
const instance = axios.create({
    baseURL: http,
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});
let loading;
// 请求数
let requestCount = 0;
//显示loading
const showLoading = () => {
    if (requestCount === 0 && !loading) {
        loading = ElLoading.service({
            text: 'loading',
            background: 'rgba(0,0,0,0.7)',
            spinner: 'el-icon-loading'
        })
    }
    requestCount++
}
const hideLoading = () => {
    requestCount--
    if (requestCount === 0) {
        loading.close()
    }
}
//请求拦截
instance.interceptors.request.use((config) => {
    showLoading();
    if (config.method === 'POST') {
        config.data = JSON.stringify(config.data)
    }
    return config;
}, (error) => {
    // 请求出错
    Promise.reject(error)
});
instance.interceptors.response.use((response) => {
    hideLoading();
    return response.data;
}, (error) => {
    //响应错误
    console.log(error);
    if (error.response && error.response.status) {
        ElMessage.error('cuowu');
        return Promise.reject(error)
    }
    return Promise.reject(error)
})

export default instance