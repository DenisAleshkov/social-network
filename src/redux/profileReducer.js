const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
    newPostText: 'denis',
};
//фукнция принимает state actione 
//возвращает state
const ProfileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:
                return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts, {
                        id: 6,
                        message: state.newPostText,
                        likesCount: 0
                    }]
                }
            case UPDATE_NEW_POST_TEXT:
                {
                    return {
                        ...state,
                        newPostText: action.newText
                    }
                }

            default:
                return state;
        }

    }
    //утилита (вспомогательная программа),
    //помогает не ошибиться в создании action
export let addPostActionCreator = () => {
        return {
            type: ADD_POST,
        }
    }
    //утилита (вспомогательная программа),
    //помогает не ошибиться в создании action
export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default ProfileReducer;