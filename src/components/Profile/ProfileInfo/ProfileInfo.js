import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({status,profile,updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }
    
    return (
        <div className={style.avatar}>
            
            <img src={profile.photos.large} />
            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus} />
        </div>
    );
}
export default ProfileInfo;