import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
//Контейнерная компонента
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText:(text) => {
            let actione = updateNewMessageTextActionCreator(text);
            dispatch(actione);
        },
        addMessage:() => {
            dispatch(addMessageActionCreator());
        }
    }
}
//законектить презентационную компоненту к store
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//новая контейнерная компонента
export default DialogsContainer; 