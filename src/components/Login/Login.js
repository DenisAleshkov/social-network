import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Input} from './../common/FormsContols/FormsControls.js';
import {required} from './../../utils/validators/validators.js';
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}  placeholder={'Login'} name={'login'}
                validate={[required]} />
            </div>
            <div>
                <Field component={Input} placeholder={'Password'} name={'password'}
                 validate={[required]}  />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )}

//оборачиваем hoc
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login=()=>{
    const onSubmit=(formData)=>{
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
    </div>
   
}

export default Login;