import React from 'react';
import Users from './Users.js';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer.js';
//контейнерная компонента
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapStateToDispatch = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }

    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Users);