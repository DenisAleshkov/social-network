import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
//Контейнерная компонента
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
        return {
            updateNewMessageText: (text) => {
                let actione = updateNewMessageTextActionCreator(text);
                dispatch(actione);
            },
            addMessage: () => {
                dispatch(addMessageActionCreator());
            }
        }
    }
    
//в hoc передаем целевую компоненту
//внутри hoc создается классовя(функц-ая) и возвращается
let AuthRedirectComponent=WithAuthRedirect(Dialogs);
//законектить презентационную компоненту к store
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//новая контейнерная компонента
export default DialogsContainer;