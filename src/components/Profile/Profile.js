import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo.js';
import MyPostsContainer from './MyPosts/MyPostsContainer.js';
const Profile = ({profile, status, updateStatus}) => {

    return (

        <div className={style.info}>
            <ProfileInfo profile={profile}
                status={status} updateStatus={updateStatus} />

            <div className={style.posts}>
                <MyPostsContainer />
            </div>
        </div>

    );
}


export default Profile;