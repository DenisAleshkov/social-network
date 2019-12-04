import React from 'react';
import style from './FormsControls.module.css';
import { Field } from 'redux-form';
const FormControl = ({ input, meta, child, element, ...props }) => {
     //условие при котором будут появляться ошибки
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, child, element, ...restProps }=props;
return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}


export const Input = (props) => {
    const { input, meta, child, element, ...restProps }=props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}

export const CreateField=(placeholder, name, validators, component, props={},text='')=>(
    <div>
<Field component={component} 
 placeholder={placeholder} 
 name={name}
validate={validators} 
{...props}
/>{text}</div>)