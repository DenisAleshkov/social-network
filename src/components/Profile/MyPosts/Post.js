import React from 'react';
import style from './Post.module.css';
const Post = (props) => {
    return (
        <div className={style.posts}>
            <div className={style.post}>
                {props.message}
                <span className={style.likes}>
                    {props.likesCount}
                </span>
            </div>
        </div>
    );
}
export default Post;