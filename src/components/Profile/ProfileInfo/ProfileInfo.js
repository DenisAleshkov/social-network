import React from 'react';
import style from './ProfileInfo.module.css';
import avatar from './../../../avatar.png';

const ProfileInfo = (props) => {
    
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={style.avatar}>

            <img className={style.avatarImage} src={avatar} alt="аватар" />

            <textarea className={style.textpost} placeholder="Input data"
                ref={newPostElement} onChange={onPostChange} value={props.newPostText} />

            <button className={style.addpost} onClick={addPost}>Add post</button>

        </div>
    );
}
export default ProfileInfo;