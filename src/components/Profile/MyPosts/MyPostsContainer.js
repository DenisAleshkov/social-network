import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
//Контейнерная компонента
let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
        return {
            addPost: (newPostText) => {
                dispatch(addPostActionCreator(newPostText));
            },
        }
    }
    //законектить презентационную компоненту к store
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
//новая контейнерная компонента
export default MyPostsContainer;