import * as axios from 'axios';
import {
    login
} from '../redux/authReducer';

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
        console.warn('Warning... Please ProfileApi object');
        return profileAPI.getProfile(userId)
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
    },

    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
    },

    logout() {
        return instanse.delete(`auth/login`)

    }
}


export const profileAPI = {
    getProfile(userId) {
        return instanse.get('profile/' + userId);
    },
    getStatus(userId) {
        return instanse.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instanse.put('profile/status', {
            status: status
        });
    }
}