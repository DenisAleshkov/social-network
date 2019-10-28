import ProfileReducer from "./profileReducer";
import MessageReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
let store = {
    //закрытие деталей
    _state: {
        profilePage: {
            posts: [{
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
        },

        messagesPage: {
            dialogs: [

                {
                    id: 1,
                    name: 'Dima'
                },

                {
                    id: 2,
                    name: 'Kolya'
                },

                {
                    id: 3,
                    name: 'Vanya'
                },

                {
                    id: 4,
                    name: 'Petya'
                },

                {
                    id: 5,
                    name: 'Andrey'
                },

                {
                    id: 6,
                    name: 'Igor'
                }
            ],

            messages: [{
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How are you?'
                },
                {
                    id: 3,
                    message: 'Welcome'
                },
                {
                    id: 4,
                    message: 'Goodbuy'
                },
                {
                    id: 5,
                    message: 'Privet'
                },

            ],
            newMessageText: ""
        },
        sidebar: {},

    },

    getState() {
        return this._state;
    },

    //    сделали методы
    _callSubscriber() {
        console.log('state is changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(actione) { //{type:'text'}-обязательное свойство

        this._state.profilePage = ProfileReducer(this._state.profilePage, actione);
        this._state.messagesPage = MessageReducer(this._state.messagesPage, actione);
        this._state.sidebar = sidebarReducer(this._state.sidebar, actione);
        this._callSubscriber(this._state);
    }
}



window.store = store;

export default store;