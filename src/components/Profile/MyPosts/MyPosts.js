import React from 'react';
import style from './Post.module.css';
import Post from './Post.js';

//утилита (вспомогательная программа),
//помогает не ошибиться в создании action
const Posts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>

                <textarea className={style.textpost} placeholder="Input data" ref={newPostElement}
                    onChange={onPostChange} value={props.newPostText} />

                <button className={style.addpost} onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default Posts;