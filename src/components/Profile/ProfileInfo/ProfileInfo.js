import React from 'react';
import style from './ProfileInfo.module.css';
import avatar from './../../../avatar.png';

const ProfileInfo = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }
 
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let actione={type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(actione);
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