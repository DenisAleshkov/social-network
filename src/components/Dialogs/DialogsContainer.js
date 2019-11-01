import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
//Контейнерная компонента
const DialogsContainer = () => {

    return (<StoreContext.Consumer>
        {
            (store) => {
               
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    let actione = updateNewMessageTextActionCreator(text);
                    store.dispatch(actione);
                }
                return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    messagesPage={store.getState().messagesPage} />
            }
        }
    </StoreContext.Consumer>
    )
}
export default DialogsContainer; 