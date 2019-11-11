import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';

const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={style.avatar}>
            <img src={props.profile.photos.large} alt="avatar" />
        </div>
    );
}
export default ProfileInfo;