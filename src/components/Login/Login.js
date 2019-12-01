import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Input} from './../common/FormsContols/FormsControls.js';
import {required} from './../../utils/validators/validators.js';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer.js';
import  style  from './../common/FormsContols/FormsControls.module.css'; 

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}  placeholder={'Email'} name={'email'}
                validate={[required]} />
            </div>
            <div>
                <Field component={Input} placeholder={'Password'} name={'password'}
                 validate={[required]}  />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )}

//оборачиваем hoc
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
       props.login(formData.email, formData.password,formData.rememberMe);
    }
    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
    </div>
   
}
const MapStateToProps=(state)=>({isAuth:state.auth.isAuth})

export default connect(MapStateToProps,{login})(Login);