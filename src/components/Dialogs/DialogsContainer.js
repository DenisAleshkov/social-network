import React from 'react';
import { addMessageActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
//Контейнерная компонента
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
        return {
            addMessage: (newMessageText) => {
                dispatch(addMessageActionCreator(newMessageText));
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