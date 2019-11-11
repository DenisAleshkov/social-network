import * as axios from 'axios';

//axios.create-вспомогательная функция
//держат в себе настройки с некоторой API
let instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "6855f9f4-a82f-47ab-bf4b-bd8bd350ef69"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const followAPI = {
    follow(id) {
        return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(respons => {
                return respons.data;
            })
    }
}

export const unfollowAPI = {
    unfollow(id) {
        return instanse.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(respons => {
                return respons.data;
            })
    }

}

export const usersAPI = {
    getUsers(currentPage, pageUsersSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageUsersSize}`)
            .then(response => {
                return response.data;
            });
    }
}

// export const getUsers2 = (currentPage, pageUsersSize) => {
//     return instanse.get(`users?page=${currentPage}&count=${pageUsersSize}`, {
//         withCredentials: true
//     })
//         .then(response => {
//             return response.data;
//         })
// }