import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessagesItem/MessagesItem.js';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElement = props.state.messages.map(m => <MessageItem message={m.message}  />)
    let message=React.createRef();
    let addmessage=()=> {
        let text=message.current.value;
        alert(text);
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
                <textarea placeholder="input-message" ref={message}></textarea>
                <button onClick={addmessage}>Send</button>
            </div>
            
        </div>
        
    );
}
export default Dialogs; 