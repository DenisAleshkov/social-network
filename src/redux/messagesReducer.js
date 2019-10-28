const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const MessageReducer = (state, actione) => {
    switch (actione.type) {
        case ADD_MESSAGE:
            let newtext = state.newMessageText;
            state.messages.push({
                id: 6,
                message: newtext
            });
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = actione.newText;

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