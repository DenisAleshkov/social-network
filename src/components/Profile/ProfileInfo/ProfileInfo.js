import React from 'react';
import style from './ProfileInfo.module.css';
import avatar from './../../../avatar.png';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer';

//утилита (вспомогательная программа),
//помогает не ошибиться в создании action

const ProfileInfo = () => {

    return (
        <div className={style.avatar}>

            <img className={style.avatarImage} src={avatar} alt="аватар" />

        </div>
    );
}
export default ProfileInfo;