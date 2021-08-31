import axios from "@/service/axios";

export const getWangYiNews = (data) => {
    return axios({
        url: '/getWangYiNews',
        method: 'get',
        data
    })
}