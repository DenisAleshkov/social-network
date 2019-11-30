import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessagesItem/MessagesItem.js';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../common/FormsContols/FormsControls.js';
import { required, MaxLengthCreator } from './../../utils/validators/validators.js';

// import Redirect from 'react-router';
//Презентационная компонента
const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => < DialogItem name={d.name}
        id={d.id} />);
    let messageElement = state.messages.map(m => < MessageItem message={m.message} />)

    let AddNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (<div className={style.dialogs} >

        <div className={style.name} > {dialogsElements} </div>

        <div className={style.messages} > {messageElement} </div>

        <div>

            <AddMessageFormRedux onSubmit={AddNewMessage} />

        </div>

    </div>

    );
}

const MaxLength50 = MaxLengthCreator(50);

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit} >
        <div>
            <div>
                <Field component={Textarea}
                    name={'newMessageText'}
                    placeholder={'input-message'}
                    validate={[required, MaxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    </form >
    )
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
export default Dialogs;