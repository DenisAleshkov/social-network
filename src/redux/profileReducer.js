import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
    //параметры по умолчанию
let initialState = {
    posts: [

        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 12
        },
        {
            id: 2,
            message: 'Hey',
            likesCount: 4
        },
        {
            id: 3,
            message: 'Ahe you go&?',
            likesCount: 15
        },
        {
            id: 4,
            message: 'Privet?',
            likesCount: 65
        },
        {
            id: 5,
            message: 'Poka?',
            likesCount: 23
        },
        {
            id: 6,
            message: 'lol?',
            likesCount: 1
        },
    ],
    profile: null,
    status: '',
};
//фукнция принимает state actione 
//возвращает state
const ProfileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:
                let newPost = action.newPostText;
                return {
                    ...state,
                    posts: [...state.posts, {
                        id: 6,
                        message: newPost,
                        likesCount: 0
                    }]
                }
            case SET_USER_PROFILE:
                {
                    return {
                        ...state,
                        profile: action.profile
                    }
                }
            case SET_STATUS:
                {
                    return {
                        ...state,
                        profile: action.status
                    }
                }

            default:
                return state;
        }

    }
    //утилита (вспомогательная программа),
    //помогает не ошибиться в создании action
export let addPostActionCreator = (newPostText) => ({
        type: ADD_POST,
        newPostText
    })
    //утилита (вспомогательная программа),
    //помогает не ошибиться в создании action
export let setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export let setStatus = (status) => ({
    type: SET_STATUS,
    status
})


//диспачим action
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}


export default ProfileReducer;