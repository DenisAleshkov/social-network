import {
    rerenderEntireTree
} from "../render";

let state = {
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

        ]
    }

}
window.state = state;
export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let UpdateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;