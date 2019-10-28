import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessagesItem/MessagesItem.js';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElement = props.state.messages.map(m => <MessageItem message={m.message} />)
    let newMessageText = props.state.newMessageText;

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let actione = updateNewMessageTextActionCreator(text);
        props.dispatch(actione);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.name}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
            <div>
                <textarea value={newMessageText} placeholder="input-message" onChange={onMessageChange}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>

    );
}
export default Dialogs; 