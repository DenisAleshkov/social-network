import React from 'react';
import style from './Post.module.css';
import Post from './Post.js';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from './../../common/FormsContols/FormsControls';
import { required, MaxLengthCreator } from './../../../utils/validators/validators.js';


const Posts =(props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let AddNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <AddMessageFormRedux onSubmit={AddNewPost} />
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    );
}

const MaxLength10=MaxLengthCreator(10);

const AddPosts = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    className={style.textpost}
                    placeholder={'input text'}
                    validate={[required, MaxLength10]} />
            </div>
            <div>
                <button className={style.addpost}>Add post</button>
            </div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'AddPostForm' })(AddPosts);

export default Posts;