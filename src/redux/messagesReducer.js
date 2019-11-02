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
                {
                    return {
                        ...state,
                        newMessageText: '',
                        messages: [...state.messages, {
                            id: 6,
                            message: state.newMessageText
                        }],
                    };
                }
            case UPDATE_NEW_MESSAGE_TEXT:
                {
                    return {
                        ...state,
                        newMessageText: action.newText
                    };

                }

            default:
                return state;
        }
    }
    //утилита (вспомогательная программа),
    //помогает не ошибиться в создании action
export let addMessageActionCreator = () => {
        return {
            type: ADD_MESSAGE,
        }
    }
    //утилита (вспомогательная программа),
    //помогает не ошибиться в создании action
export let updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default MessageReducer;