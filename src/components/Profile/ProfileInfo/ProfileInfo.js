import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={style.avatar}>
            
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus} />
        </div>
    );
}
export default ProfileInfo;