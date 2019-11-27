import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo.js';
import MyPostsContainer from './MyPosts/MyPostsContainer.js';
const Profile = (props) => {  

    return (
      
        <div className={style.info}>
            <ProfileInfo profile={props.profile} /> 
            
            <div className={style.posts}>
                <MyPostsContainer />
            </div>
        </div>

    );
}


export default Profile;