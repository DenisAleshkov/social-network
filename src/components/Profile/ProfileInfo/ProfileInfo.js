import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import avatar from './../../../avatar.png'
// import ProfileDataForm from './ProfileFormData.js';
const ProfileInfo = ({ status, profile, updateStatus, editMode, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }
const onMainPhotoSelectes=(e)=>{
    if(e.target.files.length){
        savePhoto(e.target.files[0]);
    }
}
    return (
        <div className={style.avatar}>

            <img src={profile.photos.large || avatar} />

            {isOwner && <input type={'file'} onChange={onMainPhotoSelectes} />}

            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus} />
        </div>
    );
}

// const Contact = ({ contactTitle, contactValue }) => {
//     return <div className={style.contact}>{contactTitle}:{contactValue}</div>
// }

export default ProfileInfo;