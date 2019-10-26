import React from 'react';
import style from './Profile.module.css';
import Posts from './MyPosts/Posts.js';
import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo.js';
const Profile = (props) => {

    return (
        <div className={style.info}>
            <ProfileInfo dispatch={props.dispatch}
             newPostText={props.profilePage.newPostText} 
              /> 
            <div className={style.posts}>
                <Posts myPosts={props.profilePage.posts}  />
            </div>
        </div>

    );
}


export default Profile;