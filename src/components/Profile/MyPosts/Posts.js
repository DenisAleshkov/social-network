import React from 'react';
import style from './Post.module.css';
import Post from './Post.js';

const Posts = (props) => {

    let postsElements = props.myPosts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
   
    return (

        <div className={style.posts}>
            {postsElements}
        </div >
    );
}

export default Posts;