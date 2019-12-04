import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({status,profile,updateStatus, ...props }) => {

    if (!profile) {
        return <Preloader />
    }
    
    return (
        <div className={style.avatar}>
            
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus} />
        </div>
    );
}
export default ProfileInfo;