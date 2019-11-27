import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {compose} from 'redux';
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
//compose видит как оборачивается компонента
export default compose(
    // законектить презентационную компоненту к store
    connect(mapStateToProps, mapDispatchToProps),
    // в hoc передаем целевую компоненту
    // внутри hoc создается классовя(функц-ая) и возвращается
    WithAuthRedirect
    )(Dialogs);
