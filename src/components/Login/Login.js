import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, CreateField } from './../common/FormsContols/FormsControls.js';
import { required } from './../../utils/validators/validators.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer.js';
import style from './../common/FormsContols/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
 
    return (
        <form onSubmit={handleSubmit}>

            {CreateField('Email', 'email', [required], Input)}
            {CreateField('Password', 'password', [required], Input, { type: 'password' })}
            {CreateField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
            {captchaUrl && <img src={captchaUrl} alt={'cadfcad'} />}
            {captchaUrl && CreateField('Sembols from image','captcha',[required],Input,{})}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

//оборачиваем hoc
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>

}
const MapStateToProps = (state) => ({ 
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
 })

export default connect(MapStateToProps, { login })(Login);