import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={style.avatar}>
            <img src={props.profile.photos.large} alt="avatar" />
            <ProfileStatus status={'Hello my friend'} />
        </div>
    );
}
export default ProfileInfo;