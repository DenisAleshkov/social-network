import * as axios from 'axios';

//axios.create-вспомогательная функция
//держат в себе настройки с некоторой API
let instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "79959fd9-9679-42db-a7be-96f24c09a3f3"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage, pageUsersSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageUsersSize}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    },
    follow(id) {
        return instanse.post(`follow/${id}`)
            .then(respons => {
                return respons.data;
            })
    },
    unfollow(id) {
        return instanse.delete(`follow/${id}`)
            .then(respons => {
                return respons.data;
            })
    }
}
export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    }
}