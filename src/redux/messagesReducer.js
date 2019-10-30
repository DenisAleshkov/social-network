const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
//параметры по умолчанию
let initialState = {
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
};
//фукнция принимает state actione 
//возвращает state
const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newtext = state.newMessageText;
            state.messages.push({
                id: 6,
                message: newtext
            });
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;

        default:
            return state;
    }
}

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export let updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default MessageReducer;