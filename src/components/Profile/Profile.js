import React from 'react';
import style from './Profile.module.css';
import Posts from './MyPosts/Posts.js';
import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo.js';
const Profile = (props) => {

    return (
        <div className={style.info}>
            <ProfileInfo addPost={props.addPost}
             newPostText={props.profilePage.newPostText} 
              updateNewPostText={props.updateNewPostText} />
            <div className={style.posts}>
                <Posts myPosts={props.profilePage.posts}  />
            </div>

        </div>

    );
}


export default Profile;